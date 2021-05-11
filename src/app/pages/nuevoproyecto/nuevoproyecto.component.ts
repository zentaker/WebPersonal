import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {

 
  usuario: UsuarioModel | undefined;
  recordarme: false | undefined;
  
  usuarios: UsuarioModel[] =  [];
  
  
    constructor( private auth: AuthService, private router:Router) { }
  
    ngOnInit(): void {
      this.usuario = new UsuarioModel();
      
      
     
      this.auth.getUsuarios().subscribe(
        resp => {
          this.usuarios = resp;
          
          
        }
      );
    }
    onSubmit(form: NgForm) {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor'
      });
      Swal.showLoading();

      this.auth.nuevocliente(this.usuario).subscribe(
        rep => {
          console.log(rep)
        }
      )
      
      this.auth.nuevoUsuario(this.usuario).subscribe(resp => {
        console.log(resp);
        Swal.close();
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error.message,
    
        
          
        });
  
      });
    }

}
