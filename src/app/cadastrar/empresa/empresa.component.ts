import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoNotificationService } from '@portinari/portinari-ui';
import { PoDynamicFormRegisterService } from './cadastrar-empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
  providers: [PoDynamicFormRegisterService]
})
export class EmpresaComponent implements OnInit {
  company = {};
  cadastradas = [];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'company',
      label: 'Empresa',
      required: true,
      minLength: 4,
      gridColumns: 6,
      gridSmColumns: 12,
    },
    {
      property: 'telephone',
      label: 'Telefone',
      mask: '(99)999999999',
      required: true,
      gridColumns: 6,
      gridSmColumns: 12
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

  constructor() { }

  ngOnInit() { }

  cadastrar() {
    let empresa = JSON.parse(localStorage.getItem(this.company['company']));
    console.log(empresa)
    if (empresa) {
      alert('Já existe')

    } else {
      alert('Cadastrada com sucesso');
      localStorage.setItem(this.company['company'], JSON.stringify(this.company));
    }
  }

}
