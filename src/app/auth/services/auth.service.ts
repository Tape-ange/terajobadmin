import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericsCRUDService } from 'src/app/core/handlers/generics-crud.service';
import { api } from 'src/app/config/api/constants';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().delete('authorization : `Bearer ${this.getToken}`').set('Content-Type', 'application/json')
};
// {
//       'Content-Type': 'application/json'
//   }
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _genericCRUD : GenericsCRUDService,
    private http: HttpClient) { }

  // signUp(payload: any ){
  //   const url = `${api.coreApi}/${api.auth.loginAdmin}`;
  //   console.log("signUp",url);
    
  //   return this._genericCRUD.genericPost(url, payload)
  // }

 

  signUp(payload: any ){
    
    // const url = `${api.coreApi}/${api.auth.login}`;
    const url = `${api.coreApi}/${api.auth.loginAdmin}`;
    console.log("url sign in", url);
    console.log("url sign in", payload);
    return this.http.post(url, payload)
  }

  registerAdmin(payload: any): Observable<any>{
    const url = `${api.coreApi}/${api.auth.register}`;
    console.log("url  registerAdmin", url);
    console.log("url  registerAdmin", payload);
    return this.http.post(url, payload)
  }

  confirmMail(payload: any ){
    const url = `${api.coreApi}/${api.auth.confirmAccount}`;
    console.log(" confirmMail payload", payload);
    console.log(" confirmMail url", url);
    
    // return this._genericCRUD.genericPost(url, payload)
  return this.http.post(url, payload, httpOptions)
  }

  resetPassword(payload: any ){
    const url = `${api.coreApi}/${api.auth.resetPassword}`;
    return this._genericCRUD.genericPost(url, payload)
  }

  newPassword(payload: any ){
    const url = `${api.coreApi}/${api.auth.newPassword}`;
    return this._genericCRUD.genericPost(url, payload)
  }

  logout(payload: any ){
    const url = `${api.coreApi}/${api.auth.logout}`;
    return this._genericCRUD.genericPost(url, payload)
  }

  refreshToken(payload: any): Observable<any>{
    const url = `${api.coreApi}/${api.auth.refreshToken}`;
    return this.http.post(url , payload)
  }

  public getCurrentUser(){

  }

  getToken(){

  }
}
