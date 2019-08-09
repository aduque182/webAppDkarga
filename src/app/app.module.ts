import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//Rutas
import {routing, appRoutingProviders} from './app.routing';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent}  from './components/home.component';
import {ErrorComponent}  from './components/error.component';
import {ClientesComponent}  from './components/clientes.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { UsuariosComponent } from './components/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClienteAddComponent} from './components/clientes-add.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ClientesComponent,
    UsuariosComponent,
    ClienteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    NgxPaginationModule
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
