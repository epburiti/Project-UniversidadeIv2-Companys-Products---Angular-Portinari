import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@portinari/portinari-ui';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  options: Array<any>;
  fields: Array<PoDynamicFormField>;
  products = {};

  constructor() { }

  ngOnInit() {
    this.allStorageName();

    this.fields = [
      {
        property: 'product',
        label: 'Produto',
        required: true,
        minLength: 4,
        gridColumns: 6,
        gridSmColumns: 12,
      },
      {
        property: 'company',
        label: 'Empresa',
        required: true,
        gridColumns: 6,
        gridSmColumns: 12,
        options: this.options,

      },
      {
        property: 'descricao',
        label: 'Description',
        rows: 5,
        required: true,
        gridColumns: 12,
        gridSmColumns: 12
      },

    ];
  }

  allStorageName() {

    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      let x = JSON.parse(localStorage.getItem(keys[i]))['company'];
      values.push(x)
    }
    this.options = [];
    this.options = values;
  }

  cadastrar() {
    let produto = JSON.parse(localStorage.getItem(this.products['product']));
    if (produto) {
      alert('Já existe')
    } else {
      alert('Cadastrada com sucesso');
      localStorage.setItem(this.products['product'], JSON.stringify(this.products));
    }
  }
}
