import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }

  retornaEndereco(cep){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
