import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  // Control de todo el formulario
  miFormulario: FormGroup= this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  })

  // Campo para agregar un nuevo favorito
  nuevoFavorito: FormControl = this.fb.control(null, Validators.required)

  // Muestra el array de los favoritos para luego recorrelos
  get favoritosArray (): FormArray {
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor (private readonly fb: FormBuilder) { }

  // Generador de validaccion de los campos
  campoNoValido (campo: string): boolean {
    return ((this.miFormulario.controls[campo].errors !== null) &&
     this.miFormulario.controls[campo].touched)
  }

  // Metodo para agregar un nuevo favorito
  agregarFavorito (): void {
    if (this.nuevoFavorito.invalid) { return }

    // Agregar el nuevo favorito al array ↓
    // this.favoritosArray.push(new FormControl(
    //   this.nuevoFavorito.value, Validators.required
    // ))
    // o tambien ↓
    this.favoritosArray.push(this.fb.control(
      this.nuevoFavorito.value,
      Validators.required
    ))

    this.nuevoFavorito.reset()
  }

  // Submit del formulario
  guardar (): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value)
  }
}
