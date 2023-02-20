import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-login',
    template: `
        <form>
            <fieldset>
                <legend>Login</legend>
                
                <app-labelinput id="user" etiqueta="Usuario" (datoChange)="usuario.nick = $event"></app-labelinput>
                <app-labelinput id="password" tipo="password" etiqueta="Password" (datoChange)="usuario.password = $event"></app-labelinput>
                <button type="button" (click)="aceptar()">Aceptar</button>
            </fieldset>
        </form>
    `
})
export class LoginComponent {
    @Output() onLogin = new EventEmitter<Usuario>();
    
    usuario: Usuario = {};

    aceptar(): void {
        console.log('LOGIN', this.usuario);
        this.onLogin.emit(this.usuario);
    }
}

export interface Usuario {
    nick?: string;
    password?: string;
}
