import { Component, OnInit } from '@angular/core';
import { PoListViewAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  todosItens: any;
  lista: any;
  items: any;


  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Edit',
      // action: this.hireCandidate.bind(this),
      disabled: true,
      icon: 'po-icon-edit'
    },
    {
      label: 'Delete',
      // action: this.deletar(),
      disabled: true,
      type: 'danger',
      icon: 'po-icon-close'
    }
  ];

  constructor() { }

  ngOnInit() {
    let produtos = [];
    this.lista = this.allStorage();

    for (var prop in this.lista) {
      if (JSON.parse(this.lista[prop])['product'])
        produtos.push(JSON.parse(this.lista[prop]));
    }
    this.todosItens = produtos;
    this.items = this.todosItens;
  }

  deletar() {
    console.log(this)
  }
  allStorage() {

    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  }

}
