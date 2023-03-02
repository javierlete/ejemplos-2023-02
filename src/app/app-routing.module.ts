import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosReactivosComponent } from './componentes/formularios-reactivos/formularios-reactivos.component';
import { EjemplosComponent } from './ejemplos.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/formularios-reactivos', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'ejemplos', component: EjemplosComponent },
  { path: 'formularios-reactivos', component: FormulariosReactivosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
