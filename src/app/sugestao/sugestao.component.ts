import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { BuscaCepService } from '../busca-cep.service'

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})

export class SugestaoComponent implements OnInit {
  sugestaoForm;
  endereco;
  constructor(private _snackBar: MatSnackBar, 
    private formBuilder: FormBuilder,
    private buscaCep: BuscaCepService) {
    this.sugestaoForm = this.formBuilder.group({
      categoria: '',
      titulo: '',
      descricao: '',
      cep: '',
      imagem: ''
    })
  }

  async onSubmit(data) {
    this.endereco = await this.buscaCep.retornaEndereco(data.cep).toPromise();// .then(data =>  {this.endereco = data; console.log(this.endereco);});
    console.log(this.endereco);
    this._snackBar.open("Enviado com sucesso", "Ok", {
      duration: 2000,
    });    
    this.sugestaoForm.reset();
  }

  ngOnInit() {
  }

}
