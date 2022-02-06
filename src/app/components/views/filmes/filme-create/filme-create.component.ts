import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Filme } from '../filmes.module';

@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {

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
