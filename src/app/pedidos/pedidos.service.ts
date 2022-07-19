import { Injectable } from '@angular/core';
import { Pedidos } from './pedidos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PedidoService {
    private urlEndPoint: string = 'http://localhost:8080/pedidos';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    constructor(private http: HttpClient) { }
  
    getPedidos(): Observable<Pedidos[]> {
      return this.http.get(this.urlEndPoint+'/'+localStorage.getItem('ClienteID')).pipe(
        map(response => response as Pedidos[])
      );
    }

    delete(id: number): Observable<Pedidos>{
      return this.http.delete<Pedidos>(this.urlEndPoint+ '/' +id, {headers: this.httpHeaders})
    }

}