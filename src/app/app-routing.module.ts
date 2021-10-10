import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'template',
    loadChildren: async () => await import('./template/template.module').then(m => m.TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: async () => await import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren: async () => await import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: 'template' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
