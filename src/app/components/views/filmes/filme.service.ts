import { HttpClient } from '@angular/common/http';
import { Filme } from './filmes.module';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {

   baseUrl:String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByCat(id_cat:String): Observable<Filme[]> {
    const url = `${this.baseUrl}/filmes?categorias=${id_cat}`;
    return this.http.get<Filme[]>(url);
  }

  
}
