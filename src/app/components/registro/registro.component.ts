import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


 
  usuario: UsuarioModel | undefined;
    recordarme: false | undefined;
  
  
    constructor( private auth: AuthService, private router:Router) { }
  
    ngOnInit(): void {
      this.usuario = new UsuarioModel();
    }
    onSubmit(form: NgForm) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor'
      });
      Swal.showLoading();

  

     //crea el nuevo usuario en firebase
      
      this.auth.nuevoUsuario(this.usuario).subscribe(resp => {
        console.log(resp);
        Swal.close();

            //almacena el leed den la base de datos
            this.auth.nuevocliente(this.usuario).subscribe(
              rep => {
                console.log(rep)
              }
            )
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigateByUrl('/user');
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error.message,
    
        
          
        });
  
      });
    }

}
