import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//componentes
import {HomeComponent} from './components/home.component';
import {ErrorComponent}  from './components/error.component';
import {ClientesComponent}  from './components/clientes.component';
import { UsuariosComponent } from './components/usuarios.component';
import {ClienteAddComponent} from './components/clientes-add.component';

const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'crear-clientes', component: ClienteAddComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);