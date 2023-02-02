import { Component, OnInit } from '@angular/core';
import { Deputados } from '../modelo/deputados';
import { DeputadosService } from '../modelo/deputados.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {

  constructor(private depu: DeputadosService) { }
  deputados: Deputados[];
 
  ngOnInit() {
    this.depu.obterDeputados().subscribe((res) =>{
      this.deputados = res.dados;
    });
  }

}