import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from './core/data/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private dataStorage: DataStorageService,
    private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //   let isAuth = this.dataStorage.onGetUserInfo()
    //   if ( isAuth === null ){
    //     this.router.navigateByUrl('/auth/login')
    //     return false;
    //   }

    // return true;

    let isAuth = localStorage.getItem('accesToken');
    console.log('isAuth', isAuth);
    
     if ( isAuth === null ){
          this.router.navigateByUrl('/auth/login')
          return false;
        }
    return true
  }
  
}
