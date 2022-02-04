import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias:Categoria[] = []

  displayedColumns: string[] = ['id','nome','descricao', 'filmes', 'acoes']

  constructor(private service:CategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.categorias = resposta;
    })
  }

  navegarParaCreateCategoria(){
    this.router.navigate(["categorias/create"])
  }


}
