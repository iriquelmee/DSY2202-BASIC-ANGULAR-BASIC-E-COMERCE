import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '../../../../services/registration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers :[RegistrationService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  title: string = "Registrate";
  registroForm!: FormGroup;

  //se asigna cosntrunctur abse componente
  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registroForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //evento que se ejecuta al hacer submit en formulario
  onSubmit() {
    if (this.registroForm.valid) {
      this.submitForm();
    } else {
      this.showFormErrors();
    }
  }

  //funcion ejecutada al hacer submit en formulario.
  private submitForm() {
    const { username, email, password1 } = this.registroForm.value;
    const userData = { username, email, password: password1 };

    this.registrationService.addUser(userData).subscribe(
      response => {
        console.log('Usuario agregado', response);
        alert(`Usuario ${username} agregado, te contactaremos pronto.`);
        this.registroForm.reset();
      },
      error => {
        console.error('Error al agregar usuario', error);
        alert('Error agregando usuario');
      }
    );
  }

  //funcion para validacion basica
  private showFormErrors() {
    Object.keys(this.registroForm.controls).forEach(field => {
      const control = this.registroForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }



}
