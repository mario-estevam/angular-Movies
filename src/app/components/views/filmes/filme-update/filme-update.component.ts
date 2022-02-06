import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { FormControl, Validators } from '@angular/forms';
import { Filme } from '../filmes.module';


@Component({
  selector: 'app-filme-update',
  templateUrl: './filme-update.component.html',
  styleUrls: ['./filme-update.component.css']
})
export class FilmeUpdateComponent implements OnInit {

  titulo = new FormControl('', [Validators.minLength(3)])

  diretor = new FormControl('', [Validators.minLength(3)])

  resenha = new FormControl('', [Validators.minLength(10)])

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

  update():void {
    this.service.update(this.filme).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/filmes`]);
      this.service.mensagem('Filme atualizado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/filmes`]);
      this.service.mensagem('Falha ao atualizar filme! Tente mais tarde..')
    })
  }


  getMessage() {
    if (this.titulo.invalid) {
      return 'O campo titulo deve conter no minimo 3 caracteres '
    }
    if (this.diretor.invalid) {
      return 'O campo diretor deve conter no minimo 3 caracteres '
    }
    if (this.resenha.invalid) {
      return 'O campo resenha deve conter no minimo 10 caracteres '
    }
    return false;
  }


}
