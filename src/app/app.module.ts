import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ClienteInserirComponent} from './clientes/cliente-inserir/cliente-inserir.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { Livros } from './clientes/cliente.model';

@NgModule({
  declarations: [
    AppComponent, ClienteInserirComponent, CabecalhoComponent, ClienteListaComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  livros: Livros[] = [];
  onClienteAdicionado(livro) {
  this.livros = [...this.livros, livro];
  }

 }
