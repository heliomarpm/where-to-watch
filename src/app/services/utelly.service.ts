import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtellyService {
  apiUrl = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=';
  headers = new HttpHeaders({'X-RapidAPI-Key': 'de184c0d63msh6bb07932a034065p1e1392jsn720b43ed1678'});

  constructor(private http: HttpClient) {
  }

  lookup(trem: string) {
    return this.http.get<any>(this.apiUrl + trem, {headers: this.headers});
  }
}
