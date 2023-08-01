import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../../config/api/constants'


@Injectable({
  providedIn: 'root'
})
export class NumVerifyService {

  constructor(private http: HttpClient) { }

  checkPhone(phone: number): Observable<any>{
    const header = {
      headers :  new HttpHeaders().set('apikey',   `${api.users.listUserBlock}`)
    };
    console.log('httpOptions', header);
    
    const url = api.numVerifyUrl + '?number=' + phone;
    console.log('checkPhone', url);
    
    return this.http.get(url, header);
  }
}
