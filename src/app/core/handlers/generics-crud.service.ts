import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenericsCRUDService {

  constructor(
    private _http: HttpClient,
  ) { }


  genericGet(url: string): Observable<any> {
    return this._http.get(url).pipe(catchError((err) => this.errorHandler(err)))
  }

  genericPost(url: string, payload: any): Observable<any> {
    console.log("generic", url);
    console.log("generic", payload);
    return this._http.post(url, payload).pipe(catchError((err) => this.errorHandler(err)))
  }

  genericPut(url: string, payload: any): Observable<any> {
    return this._http.put(url, payload).pipe(catchError((err) => this.errorHandler(err)))
  }

  genericDelete(url: string): Observable<any> {
    return this._http.delete(url).pipe(catchError((err) => this.errorHandler(err)))
  }

  private errorHandler(error: any) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    }

    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 401: {
          // TODO document why this block is empty
          console.error('#401', error)
          break
        }
        case 403: {
          // TODO document why this block is empty
          console.error('#403', error)
          break
        }
        case 404: {
          // TODO document why this block is empty
          console.error('#404', error)
          break
        }
        case 500: {
          // TODO document why this block is empty
          console.error('#500', error)
          break
        }
        default: {
          // TODO document why this block is empty
          console.error('#default', error)
          break
        }
      }
    } else {
      errorMessage = ''
    }
    return throwError(errorMessage)

  }
}
