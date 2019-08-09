import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Cliente } from '../models/cliente';
import { GLOBAL } from './global';
import {ClientesComponent} from '../components/clientes.component';
//import {enviroment} from 'src/environments/environment';
@Injectable({
    providedIn:'root',
    
})

export class ClienteServices {
    public url: string;
    constructor(
        public _http: Http
    ) {
        this.url = GLOBAL.url;
    }
    getClientes():Observable<Cliente[]> {
        return this._http.get(this.url+'clientes').map(res => res.json());
    }
    postClientes(cliente:Cliente){
        let json = JSON.stringify(cliente);

        let headers = new Headers({'Content-Type':'application/json'});
        
        return this._http.post(this.url+'cliente', json, {headers:headers})
                            .map(res => res.json());
                            

    }

}
        

    


