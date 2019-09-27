import { Injectable } from '@angular/core';

//Importei o Http, Response, Headers, RequestOptions para requisições no Back-end
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class SetorService {

  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  //Função que irá fazer uma request no server para buscar a lista de setores
  getSetor() {
      return this.http.get('/listSetor')
                      .map(response => response.json())
  }

  //Função que irá fazer uma request no server para buscar apenas o setor de um determinado ID
  getSetorId(data) {

      return this.http.post('/byIdSetor', { id: data }, this.options)
                      .map(response => response.json())
  }

  //Função que irá fazer uma request no server para inserir um setor
  saveSetor(data) {

    return this.http.post('/saveSetor', data, this.options)
                    .map(response => response.json())
  }

  //Função que irá fazer uma request no server para dar update em um setor
  updateSetor(data) {

    return this.http.post('/updateSetor', data, this.options)
                    .map(response => response.json())
  }

  //Função que irá fazer uma request no server para deletar um setor
  delSetor(data) {

    return this.http.post('/deleteSetor', data, this.options)
                    .map(response => response.json())
  }

}