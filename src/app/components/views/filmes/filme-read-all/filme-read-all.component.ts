import { ActivatedRoute } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Filme } from './../filmes.module';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-filme-read-all',
  templateUrl: './filme-read-all.component.html',
  styleUrls: ['./filme-read-all.component.css']
})
export class FilmeReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'detalhes', 'acoes'];
  filmes: Filme[] = []
  id_cat: string = ''

  constructor(private service: FilmeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCat(this.id_cat).subscribe((resposta) => {
      this.filmes = resposta;
    })
  }

}
