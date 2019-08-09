import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ClienteServices} from '../services/cliente.services';
import { Cliente } from '../models/cliente';
import { Key } from 'protractor';
import { Usuario } from '../models/usuario';
import { UsuarioServices } from '../services/usuarioServices';

@Component({
selector: 'usuarios',
templateUrl: '../views/usuarios.html',
providers: [ClienteServices]
})
export class UsuariosComponent{
    public titulo:string;
    public usuarios:any ;

   

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _usuarioService: UsuarioServices
    ){
        this.titulo= 'Usuarios registrados'
    }

    ngOnInit(){
        console.log('Componente de clientes cargado');
       this._usuarioService.getUsuarios().subscribe(

        (result)=> {
            
            this.usuarios = (result);
            
            
            //a.push(this.clientes);
            console.log(this.usuarios);
            //console.log(this.clientes);

        },
        error => {
console.log(<any>error);
        }
       )
    }
}