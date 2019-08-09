import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {UsuarioServices} from '../services/usuarioServices';


import {Usuario} from '../models/usuario';

@Component({
    selector: 'cliente-add',
    templateUrl: '../views/cliente-add.html',
    providers: [UsuarioServices]
    })
    export class UsuarioAddComponent{
        public titulo:string;
      public usuario:Usuario;

        constructor(
            private _usuario_services: UsuarioServices,
            private _route: ActivatedRoute,
            private _router: Router
        ){
            this.titulo = 'Registrar nuevo usuario';
            this.usuario = new Usuario('', '', '','', '');
        }
        ngOnInit(): void {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            console.log('cliente-add.component.ts cargado');
        }

        onSubmit(){
            console.log(this.usuario);
            this._usuario_services.postUsuario(this.usuario).subscribe(
                
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
