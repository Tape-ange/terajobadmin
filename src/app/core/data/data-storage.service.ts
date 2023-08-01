import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public fullDataUser: any;
  token : string | null | undefined
  decodeToken: any;

  private userfullData = new Subject();
  public currentUser = this.userfullData.asObservable()
  constructor() {}



  getUserFullData(): Observable<any>{
   // this.userfullData = new Subject();
    const  decodeToken = this.onGetUserInfo()
    this.userfullData.next(decodeToken)
    //this.currentUser = this.userfullData.asObservable();
    return this.userfullData
  }


  // decoder le token
onGetUserInfo(){
   
   this.token = localStorage.getItem('accesToken');
  if (this.token){
    try{
     const tokenDecoded =  JSON.parse(window.atob(this.token.split('.')[1]));
      return tokenDecoded;
    } catch(error){
      console.error(error);
      return null
      
    }
  } else {
    return null
  }
}





}
