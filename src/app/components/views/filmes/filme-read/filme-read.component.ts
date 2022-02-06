import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Filme } from '../filmes.module';


@Component({
  selector: 'app-filme-read',
  templateUrl: './filme-read.component.html',
  styleUrls: ['./filme-read.component.css']
})
export class FilmeReadComponent implements OnInit {

  id_cat: String = ''

  filme: Filme = {
    id: '',
    titulo: '',
    diretor: '',
    resenha: '',

  }

  constructor(private service: FilmeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.filme.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/filmes`]);
  }

  findById(): void {
    this.service.findById(this.filme.id!).subscribe((resposta) => {
      this.filme = resposta
    })
  }


}
