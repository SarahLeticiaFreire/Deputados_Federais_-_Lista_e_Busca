import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deputados } from './deputados';

@Injectable()
export class DeputadosService {
  private URL: string;
  constructor(private http: HttpClient) {
    this.URL = 'https://dadosabertos.camara.leg.br/api/v2/';
  }
  obterDeputados(): Observable<any> {
    return this.http.get<any>(`${this.URL}deputados?ordem=ASC&ordenarPor=nome`);
  }
  obterPorNome(nome: string):Observable<any>{
    return this.http.get<any>(`${this.URL}deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`
    );
  }
}