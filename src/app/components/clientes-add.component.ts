import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {ClienteServices} from '../services/cliente.services';


import {Cliente} from '../models/cliente';

@Component({
    selector: 'cliente-add',
    templateUrl: '../views/cliente-add.html',
    providers: [ClienteServices]
    })
    export class ClienteAddComponent{
        public titulo:string;
      public cliente:Cliente;

        constructor(
            private _cliente_services: ClienteServices,
            private _route: ActivatedRoute,
            private _router: Router
        ){
            this.titulo = 'Registrar nuevo cliente';
            this.cliente = new Cliente(0, '', '');
        }
        ngOnInit(): void {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            console.log('cliente-add.component.ts cargado');
        }

        onSubmit(){
            console.log(this.cliente);
            this._cliente_services.postClientes(this.cliente).subscribe(
                
                response =>{
                  
                    if (response.status == 200){
                        this._router.navigate(['/home']);
                    }else{
                        console.log(response)
                    }

                },
                err =>{
                    console.log(<any>err)
                }
            )
        }
    }
