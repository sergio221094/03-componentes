import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpt() {
    return this.http.get<Componente[]>('/assets/data/menu-opt.json');
  }
}
