import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  // constructor () { }
  persona: any = {
    nombre: 'Pepito',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'DeathStranding' }
    ]
  }

  ngOnInit (): void {
  }
}
