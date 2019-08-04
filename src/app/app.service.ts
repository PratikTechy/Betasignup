import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse, HttpParams } from '@angular/common/http'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com';

  constructor(private http: HttpClient) {


  }




  public signupFunction(data): Observable<any> {

    const params = new HttpParams()

      .set('name', data.name)
      .set('email', data.email)
      .set('mobile', data.mobile)
      .set('apiKey',data.apiKey)




    return this.http.post(`${this.url}/api/v1/users/signup`, params)

  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError


}
