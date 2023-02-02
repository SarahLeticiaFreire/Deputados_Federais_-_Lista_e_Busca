import { Component, OnInit } from '@angular/core';
import { Deputados } from '../modelo/deputados';
import { DeputadosService } from '../modelo/deputados.service';

@Component({
  selector: 'app-obter-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
})
export class PartidosComponent implements OnInit {
  constructor(public ds: DeputadosService) {}
  deputados: Deputados[];
  ngOnInit() {}
  pesquisa(nome: string) {
    return this.ds.obterPorNome(nome).subscribe((res) => {
      this.deputados = res.dados;
    });
  }
}
