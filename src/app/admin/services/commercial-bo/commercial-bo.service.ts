import { Injectable } from '@angular/core';
import { GenericsCRUDService } from 'src/app/core/handlers/generics-crud.service';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/app/config/api/constants';

@Injectable({
  providedIn: 'root',
})
export class CommercialBoService {


  constructor(
    private _genericCRUD: GenericsCRUDService,
    private _http: HttpClient
  ) {}



  loginCommercialBo(data: any){
    const url = `${api.coreApi}/${api.commercial.registerCommercial}`;
    // return this._genericCRUD.genericPost(url,data);
    console.log('api',url);

    return this._http.post(url,data)
  }

  commercialBoList(){
    const url = `${api.coreApi}/${api.commercial.listCommercialBO}`;
    return this._genericCRUD.genericGet(url);
  }
}
