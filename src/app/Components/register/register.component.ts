import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { faAmericanSignLanguageInterpreting, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      user: ['', [Validators.required]]
    }, {
      //validar que las contraseñas coincidan
    })
  }

  faAmericanSignLanguageInterpreting = faAmericanSignLanguageInterpreting;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  mail?: string;
  password?: string;
  password2?: string;
  user?: string;
  nombre?: string;
  apellidos?: string;
  blueButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary',
    },
    buttonsStyling: false
  })
  inputTipoTexto: boolean = false;
  inputTipoTexto2: boolean = false;
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
  }

  register() {
    //Registrar nuevo usuario
  }

  mostrarPassword(): void {
    this.inputTipoTexto = !this.inputTipoTexto;
  }
  mostrarPassword2(): void {
    this.inputTipoTexto2 = !this.inputTipoTexto2;
  }

  get f() {
    return this.form.controls;
  }
}
