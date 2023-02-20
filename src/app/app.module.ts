import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelinputComponent } from './componentes/labelinput.component';
import { LoginComponent } from './componentes/login.component';
import { TituloComponent } from './componentes/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LabelinputComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
