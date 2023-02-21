import { Component } from '@angular/core';
import { Usuario } from './componentes/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos';
  usuario?: Usuario;
  fecha = '2001-02-03';

  login(usuario: Usuario) {
    console.log('APP', usuario);
    this.usuario = usuario;
  }

  mostrar(dato: any): void {
    console.log(dato);
  }
}
