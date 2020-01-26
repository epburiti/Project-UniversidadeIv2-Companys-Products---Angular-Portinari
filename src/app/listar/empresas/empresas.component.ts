import { Component, OnInit } from '@angular/core';

import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoNotificationService, PoListViewAction } from '@portinari/portinari-ui';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
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
    let teste = [];
    this.lista = this.allStorage();

    for (var prop in this.lista) {
      teste.push(JSON.parse(this.lista[prop]));
    }
    this.todosItens = teste;
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
