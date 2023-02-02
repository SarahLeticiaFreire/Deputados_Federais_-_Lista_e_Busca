import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeputadosComponent } from './deputados/deputados.component';
import { PartidosComponent } from './partidos/partidos.component';

const rotas: Routes = [
  { path: '', component: DeputadosComponent },
  { path: 'partidos', component: PartidosComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class RoutingModule {}
