import '@angular/common/locales/global/es';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestacadoComponent } from './componentes/destacado.component';
import { LabelinputComponent } from './componentes/labelinput.component';
import { LoginComponent } from './componentes/login.component';
import { TituloComponent } from './componentes/titulo.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { IvaPipe } from './iva.pipe';
import { CartelDirective } from './cartel.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { PrincipalComponent } from './principal/principal.component';
import { EjemplosComponent } from './ejemplos.component';
import { FormulariosReactivosComponent } from './componentes/formularios-reactivos/formularios-reactivos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { dniValidator } from './dni.directive';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LabelinputComponent,
    LoginComponent,
    DestacadoComponent,
    IvaPipe,
    CartelDirective,
    PrincipalComponent,
    EjemplosComponent,
    FormulariosReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
