import {Component} from '@angular/core';
import {Usuario} from '../shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Social IFPB';
  usuario: Usuario;
  usuarios: Array<Usuario>;
  aluno: String;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.aluno = 'Brian Rafael Azevedo Trajano'
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

}
