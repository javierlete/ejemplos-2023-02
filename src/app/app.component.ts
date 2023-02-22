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
  mapeadoMensajes:
    { [k: string]: string } = { '=0': 'No hay mensajes.', '=1': 'Hay un mensaje.', '=2': 'Hay un par de mensajes', 'other': 'Hay # mensajes.' };

  mapeadoInvitacion: any = {'hombre': 'Invítale.', 'mujer': 'Invítala.', 'otro': 'Invitalo.'};
  
  login(usuario: Usuario) {
    console.log('APP', usuario);
    this.usuario = usuario;
  }

  mostrar(dato: any): void {
    console.log(dato);
  }
}
