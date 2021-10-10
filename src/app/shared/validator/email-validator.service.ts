import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  constructor (private readonly http: HttpClient) { }

  validate (control: AbstractControl): Observable<ValidationErrors | null> {
    const email: string = control.value
    console.log(email)

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        // espera 3s, porque es una validacion asincrona
        // delay(3000),
        // verificar si el email ya existe
        map(resp => (resp.length === 0) ? null : { emailTomado: true })
      )
  }
}
