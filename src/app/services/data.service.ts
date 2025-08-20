import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {
producto: Producto | undefined=undefined

  constructor(private http: HttpClient) { }

  private api='http://localhost:3000/productos';

  getAllProductos(){
   return this.http.get(this.api) ;
  }
  getProductoById(id: number){
    return this.http.get<Producto>(`${this.api}/${id}`);
  }

}
