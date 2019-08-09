import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Cliente } from '../models/cliente';
import { Usuario } from '../models/usuario';
import { GLOBAL } from './global';
import {ClientesComponent} from '../components/clientes.component';

@Injectable({
    providedIn:'root',
    
})


export class UsuarioServices {
    public url: string;
    constructor(
        public _http: Http
    ) {
        this.url = GLOBAL.url;
    }
    getUsuarios() {
        return this._http.get(this.url+'usuarios').map(res => res.json());
    }
    postUsuario(usuario:Usuario){
        let json = JSON.stringify(usuario);

        let headers = new Headers({'Content-Type':'application/json'});
        
        return this._http.post(this.url+'cliente', json, {headers:headers})
                            .map(res => res.json());
                            

    }

}
        
    
    


