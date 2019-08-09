import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ClienteServices} from '../services/cliente.services';
import { Cliente } from '../models/cliente';
import { Key } from 'protractor';
import { Observable, observable } from 'rxjs';

@Component({
selector: 'clientes',
templateUrl: '../views/clientes.html',
providers: [ClienteServices]
})
export class ClientesComponent{
    public titulo:string;
    public clientes:any;
    p: number = 1;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _clienteService: ClienteServices
    ){
        this.titulo= 'Clientes registrados'
    }

    ngOnInit(){
        console.log('Componente de clientes cargado');
       this._clienteService.getClientes().subscribe(

        (result)=> {
          this.clientes = (result);
          const a =(this.clientes); 
          //a.push(this.clientes);
            console.log(this.clientes);
    
        },
        error => {
    console.log(<any>error);
        }
       )
    }
}


