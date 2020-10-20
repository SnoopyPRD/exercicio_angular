import { Component, OnInit, Input } from '@angular/core';
import { Livros } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  @Input() livros: Livros[] = [];
  /*clientes = [{
    nome: 'Vitao',
    telefone: '11122',
    email: 'hotmail'
  },
  {
    nome: 'Vitin',
    telefone: '222233',
    email: 'hotmail.com'
  }]*/

  constructor() { }

  ngOnInit(): void {
  }

}
