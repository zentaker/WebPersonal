import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuarioModel } from '../models/usuario.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

  private urlbd = 'https://web-personal-9dc40-default-rtdb.firebaseio.com';
  private apikey = 'AIzaSyD1sGkNT_4QBVJ4UsQZKRkF2d2Uhtx2goc';
  
  id = Math.random();
  userToken: string;

  constructor(private http: HttpClient) { }

  nuevoUsuario(usuario: UsuarioModel) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    


    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData

    )/* .pipe(
      //servir como intermediario, si viene el token
      map(resp => {
        //filtrar la informacion 
        this.guardarToken(resp['idToken']);
        return resp
      })
    ) */

  }
  nuevocliente(usuario: UsuarioModel) {
    const user = {
      email: usuario.email,
      nombre: usuario.nombre,
      servicio: usuario.servicio,
      telefono: usuario.telefono
    
       
    }
    console.log(user)

     return this.http.post(`${this.urlbd}/cliente.json`, user)
  }

  getUsuarios() {
    return this.http.get(`${this.urlbd}/cliente.json`).pipe(
      map(resp => this.crearArreglo(resp)), delay(1500)
    )
  }

  private crearArreglo(usuariosObj: Object) {

    const usuarios: UsuarioModel[] = [];
 
    if (usuariosObj === null) {
      return [];
    }
    Object.keys(usuariosObj).forEach(key => {
      const usuario: UsuarioModel = usuariosObj[key];
      usuario.id = key;
      usuarios.push(usuario);

    })
    return usuarios;

  }
/*   private guardarToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString())

  } */
}
