import { Component, EventEmitter, Output } from '@angular/core';
import { Livros } from '../cliente.model';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent {

  @Output() livroAdicionado = new EventEmitter();

    id: string;
    titulo: string;
    autor: string;
    paginas: string;

    onAdicionarLivro(){
      const livro: Livros = {
        id: this.id,
        titulo: this.titulo,
        autor: this.autor,
        paginas: this.paginas
        };
        this.livroAdicionado.emit(livro);
        }
  
}