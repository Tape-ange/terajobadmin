import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/config/api/constants';

@Injectable({
  providedIn: 'root'
})
export class SiretVerifyService {

  constructor(private http: HttpClient) {}

  checkSiret(siret: string): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders().set( 'Authorization', api.siretKey)
    };
    const url = api.siret  + siret;

    return this.http.get(url, httpOptions);
  }
}
