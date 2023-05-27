import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAmericanSignLanguageInterpreting, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user?: string;
  password?: string;
  faAmericanSignLanguageInterpreting = faAmericanSignLanguageInterpreting;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  inputTipoTexto: boolean = false;
  blueButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary',
    },
    buttonsStyling: false
  })

  login(): void {
    if (this.user == null || this.password == null) {
      this.blueButtons.fire('Error Login', 'Usuario y/o contraseña vacíos', 'error');
      return;
    }

    //Servicio para hacer login
    
  }

  enviarEmail(): void {
    swal.fire({
      title: 'Introduce tu correo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonColor: '#FF8B40',
      cancelButtonColor: '#FF4535',
      confirmButtonText: 'Enviar correo',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        console.log("prueba")
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.blueButtons.fire('Correo enviado con éxito', `En breve, recibirás un correo que te permitirá cambiar tu contraseña`, 'success');
      }
    })
  }

  cambioTipoInput() {
    this.inputTipoTexto = !this.inputTipoTexto;
  }
}
