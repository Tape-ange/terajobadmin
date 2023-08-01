import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/core/data/data-storage.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  user: any;


  constructor(
    private _dataStorageService : DataStorageService
  ) { }

  ngOnInit() {
    console.log("hello dashboard");
  }

  private getUserData(){
    this._dataStorageService.getUserFullData().subscribe(res=>{
      console.log("datastore dash",res);
      this.user = res;
      return res
    })
  }

}
