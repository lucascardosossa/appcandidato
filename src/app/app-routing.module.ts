import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import { SugestaoComponent } from './sugestao/sugestao.component';


const routes: Routes = [{ path: '', component: InicioComponent },{path:'sugestao', component: SugestaoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
