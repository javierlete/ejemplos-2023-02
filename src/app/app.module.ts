import '@angular/common/locales/global/es';

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
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LabelinputComponent,
    LoginComponent,
    DestacadoComponent,
    IvaPipe,
    CartelDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
