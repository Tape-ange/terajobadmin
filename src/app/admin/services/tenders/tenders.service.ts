import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericsCRUDService } from 'src/app/core/handlers/generics-crud.service';
import { api } from './../../../config/api/constants'

@Injectable({
  providedIn: 'root'
})
export class TendersService {

  constructor(
    private _genericCRUD: GenericsCRUDService,
    private http: HttpClient
  ) { }



  tenderActiveList (){
    const url = `${api.coreApi}/${api.tenders.listTenderActive}`;
    console.log("allTender", url);

    return this._genericCRUD.genericGet(url)
  }

  archiveTenders(payload: object ){
     const url = `${api.coreApi}/${api.tenders.blockTender}`;
    return this._genericCRUD.genericPut(url, payload)
  }

  tenderBlockList(){
    const url = `${api.coreApi}/${api.tenders.listTenderBlock}`;
    return this._genericCRUD.genericGet(url)
  }

  unArchiveTenders(payload : object){
    const url = `${api.coreApi}/${api.tenders.unblockTender}`;
    console.log("");

    return this._genericCRUD.genericPut(url, payload);
  }
  allTender(){
    const url = `${api.coreApi}/${api.tenders.alltenders}`;
    console.log("allTender", url);

    return this._genericCRUD.genericGet(url)
  }


}
