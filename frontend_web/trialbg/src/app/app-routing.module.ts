import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallepeliculaComponent } from './detallepelicula/detallepelicula.component';

const routes: Routes = [
  { path: 'detalles/:id', component: DetallepeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
