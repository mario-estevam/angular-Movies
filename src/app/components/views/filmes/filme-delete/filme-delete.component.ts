import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Filme } from '../filmes.module';


@Component({
  selector: 'app-filme-delete',
  templateUrl: './filme-delete.component.html',
  styleUrls: ['./filme-delete.component.css']
})
export class FilmeDeleteComponent implements OnInit {

  id_cat: String = ''

  filme: Filme = {
    id: '',
    titulo: '',
    diretor: '',
    resenha: '',

  }

  constructor(private service: FilmeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.filme.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  create(): void {
    this.service.create(this.filme, this.id_cat).subscribe(resposta => {
      this.router.navigate([`categorias/${this.id_cat}/filmes`]);
      this.service.mensagem('Filme criado com sucesso');
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/filmes`]);
      this.service.mensagem('error na criação do filme!');
    });
  }

  cancel():void{
    this.router.navigate([`categorias/${this.id_cat}/filmes`]);
  }

  findById(): void {
    this.service.findById(this.filme.id!).subscribe((resposta) => {
      this.filme = resposta
    })
  }

  delete():void {
    this.service.delete(this.filme.id!).subscribe(() => {
      this.router.navigate([`categorias/${this.id_cat}/filmes`]);
      this.service.mensagem('Filme deletado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/filmes`]);
      this.service.mensagem('Falha ao deletar filme! Tente mais tarde..')
    })
  }

}
