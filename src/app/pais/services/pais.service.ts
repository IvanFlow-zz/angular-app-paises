import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.com/v3.1/';
  get httpParams(): HttpParams{
    return new HttpParams().set('fields','name,capital,population,flags,cca2')
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    // return this.http.get<Country[]>(url, {params: this.httpParams});
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
