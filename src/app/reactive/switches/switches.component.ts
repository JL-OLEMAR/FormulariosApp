import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  // Control de todo el formulario
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  // Valores iniciales de los campos controlados por el formulario
  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor (private readonly fb: FormBuilder) { }

  ngOnInit (): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    })
  }
}
