/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { ValidatorService } from '../../../shared/validator/validator.service'
import { EmailValidatorService } from '../../../shared/validator/email-validator.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    // name: [valor, [reglas sincronas], [reglas asincronas]]
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  get emailErrorMsg (): string {
    const errors = this.miFormulario.get('email')?.errors

    if (errors?.required) {
      return 'Email es obligatorio'
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo'
    } else if (errors?.emailTomado) {
      return 'El email ya fue tomado'
    }

    return ''
  }

  constructor (
    private readonly fb: FormBuilder,
    private readonly vs: ValidatorService,
    private readonly ev: EmailValidatorService
  ) {}

  ngOnInit (): void {
    this.miFormulario.reset({
      nombre: 'Pepe Lucho',
      email: 'test1@test.com',
      username: 'pepe_angular',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido (campo: string): boolean {
    return (this.miFormulario.controls[campo]?.invalid &&
      this.miFormulario.controls[campo]?.touched)
  }

  submitFormulario (): void {
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }
}
