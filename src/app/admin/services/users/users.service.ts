import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/config/api/constants';
import { GenericsCRUDService } from 'src/app/core/handlers/generics-crud.service';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private _genericCRUD: GenericsCRUDService,
    private _http: HttpClient
  ) {}

  getUsers() {
    const url = `${api.coreApi}/${api.users.listUer}`;
    // const url = api.coreApi + api.users.listUer;
    console.log('getUsers', url);

    return this._genericCRUD.genericGet(url);
  }

  archiveUser(payload: object) {
    const url = `${api.coreApi}/${api.users.blockeUser}`;
    return this._genericCRUD.genericPut(url, payload);
  }

  BlockUsersList() {
    const url = `${api.coreApi}/${api.users.listUserBlock}`;
    return this._genericCRUD.genericGet(url);
  }

  unArchhivedUsers(payload: object) {
    console.log('payload', payload);

    const url = `${api.coreApi}/${api.users.unblockUser}`;
    console.log('url', url);

    // return this._genericCRUD.genericPut(url, payload);
    return this._http.put(url, payload);
  }

  registerPartner( payload : object){
    console.log('payload', payload);

    const url = `${api.coreApi}/${api.users.registerPartner}`;
    console.log('url', url);

    return this._genericCRUD.genericPost(url, payload)
  }
}
