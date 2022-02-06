import { HttpClient } from '@angular/common/http';
import { Filme } from './filmes.module';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {

   baseUrl:String = environment.baseUrl

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAllByCat(id_cat:String): Observable<Filme[]> {
    const url = `${this.baseUrl}/filmes?categoria=${id_cat}`;
    return this.http.get<Filme[]>(url);
  }

  findById(id: String):Observable<Filme>{
    const url = `${this.baseUrl}/filmes/${id}`
    return this.http.get<Filme>(url)
  }

  update(filme: Filme):Observable<Filme> {
    const url = `${this.baseUrl}/filmes/${filme.id}`
    return this.http.put<Filme>(url, filme)
  }

  create(filme:Filme, id_cat:String):Observable<Filme>{
    const url = `${this.baseUrl}/filmes?categoria=${id_cat}`;
    return this.http.post<Filme>(url,filme);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/filmes/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
