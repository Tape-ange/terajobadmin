import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataStorageService } from 'src/app/core/data/data-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
element: any;
  user: any;



  constructor(
    private route: Router,
    private _authService: AuthService,
    private _dataStorageService : DataStorageService
  ) { }


  ngOnInit(): void {
     this.getUserData();
   
    
  }

  getUserData(){
    
    // this._dataStorageService.onGetUserInfo()
    this.user = this._dataStorageService.onGetUserInfo()
    console.log("getUserData", this.user);
    
  }

  logout(){
    localStorage.clear();
    console.log("logout");
    this.route.navigateByUrl('/auth/login')
  }



}
