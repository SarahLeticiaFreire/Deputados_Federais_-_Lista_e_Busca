import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeputadosComponent } from './deputados/deputados.component';
import { DeputadosService } from './modelo/deputados.service';
import { RoutingModule } from './app-routing.module';
import { PartidosComponent } from './partidos/partidos.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutingModule],
  declarations: [AppComponent, DeputadosComponent,PartidosComponent ],
  bootstrap: [AppComponent],
  providers: [DeputadosService],
})
export class AppModule {}
