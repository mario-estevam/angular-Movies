import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.module';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl:String = environment.baseUrl;

  constructor(private http: HttpClient, private snack:MatSnackBar) {}
  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categoria:Categoria):Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  mensagem(str:String): void{
    this.snack.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:3000
    })
  }
}
