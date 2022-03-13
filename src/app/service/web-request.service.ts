import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError, TimeoutError} from 'rxjs';
import { constants } from '../util/constants';

// import {RequestOptions} from "http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {


  constructor(private http: HttpClient) { }
  /**
   * Function to handle error when the server return an error
   *
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    else if (error instanceof TimeoutError) {
      return throwError(error);
   }

    else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  /**
   * FUNCTION OF WS GET METHOD
   *
   * @param url
   *
   */

  get<T>(url: string,params: HttpParams): Observable<any> {
    return this.http.get(`${constants.ROOT_URL}/${url}`, { observe: 'response', params: params } ).pipe(
      catchError(this.handleError)
    );

  }

  /**
   * FUNCTION OF WS GET METHOD PROXY
   *
   *
   * @param url
   * @param params
   */

  getProxy<T>(url: string,params: HttpParams): Observable<any> {
    return this.http.get(`/${url}`, { observe: 'response', params: params } ).pipe(
      catchError(this.handleError),
      map(response => {
        return response;
      })
    );

  }


  /**
   * FUNCTION OF WS POST METHOD
   *
   *
   * @param url
   * @param body
   */
  post<T>(url: string, body: Object): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };
    return this.http.post(`${constants.ROOT_URL}/${url}`, body, { headers: headers, observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }
  postWithParams<T>(url: string, body: Object, params: HttpParams): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${constants.ROOT_URL}/${url}`, body, {observe: 'response', params: params}).pipe(
      catchError(this.handleError)
    )
  }

  postUpload<T>(url: string, body: Object): Observable<any> {


    return this.http.post(`${constants.ROOT_URL}/${url}`, body, {  observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  delete(url:string,params: HttpParams):Observable<any>{
    return this.http.delete(`${constants.ROOT_URL}/${url}`, { observe: 'response', params: params } ).pipe(
      catchError(this.handleError),
      map(response => {
        return response;
      })
    );
  }



  intLogin() {
    return this.http.post(`${constants.ROOT_URL}/resources/light-ecm/authResource/initLogin`,
       {
        observe: 'response'
      });
  }

  pdf() { return this.http.get(`${constants.ROOT_URL}/resources/light-ecm/report/test`,{ responseType: 'blob' });
  }

  download(url: string,params: HttpParams) { return this.http.get(`${constants.ROOT_URL}/${url}`,{ params: params , responseType: 'blob' })
  .pipe(
    catchError(this.handleError)
  );
  }
}
