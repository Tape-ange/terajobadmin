import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommercialBoService } from 'src/app/admin/services/commercial-bo/commercial-bo.service';
import { TendersService } from 'src/app/admin/services/tenders/tenders.service';
import { UsersService } from 'src/app/admin/services/users/users.service';
import { DataStorageService } from 'src/app/core/data/data-storage.service';

@Component({
  selector: 'app-dashbord-stat',
  templateUrl: './dashbord-stat.component.html',
  styleUrls: ['./dashbord-stat.component.scss'],

 
})
export class DashbordStatComponent implements OnInit {
  users: [] | undefined;
  lengthUser: number | undefined;
  commercialBo: [] | undefined;
  lengthBo: number | undefined;
  tenders: [] | undefined;
  lengthTender: number | undefined;
  userConnected: any;

  constructor(
    private _userService: UsersService,
    private commercialBOService: CommercialBoService,
    private _tenderService : TendersService,
    public _dataStorageService: DataStorageService
  ) { }
 
    
  ngOnInit(): void {
    this.onUsersList();
    this.onListCommercialBo();
    this.onAllTenders();
    this.getUserData();
  }


  getUserData(){
    
    // this._dataStorageService.onGetUserInfo()
    this.userConnected = this._dataStorageService.onGetUserInfo()
    console.log("getUserData userConnected", this.userConnected.accountType);
    
  }

  // liste des users
  onUsersList() {
    this._userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.data;
      this.lengthUser = this.users?.length;

    });
  }

    // liste des commercial BO
    onListCommercialBo() {
      this.commercialBOService.commercialBoList().subscribe((res) => {
        console.log('liste commercial bo', res);
        this.commercialBo = res.data;
        this.lengthBo = this.commercialBo?.length
        console.log('liste commercial bo', this.lengthBo);

      });
    }

    // list tender
    onAllTenders() {
      this._tenderService.allTender().subscribe((res) => {
  
        this.tenders = res.data;
        console.log('list tender',this.tenders);
        this.lengthTender = this.tenders?.length
  
      });
    }
  }




