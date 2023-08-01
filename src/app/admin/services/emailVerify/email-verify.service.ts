import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/config/api/constants';


@Injectable({
  providedIn: 'root'
})
export class EmailVerifyService {

  constructor(private http: HttpClient) { }

  checkEmail(email: string): Observable<any>{
    console.log('email checkEmail', email);
    const url =  api.coreApi + api.emailVerifyUrl + '?email=' + email;
    console.log('url checkEmail', url);
    
    return this.http.get(url);
  }
}
