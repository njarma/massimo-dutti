import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {
  esMock = (environment.ambientes[environment.ambientes.seleccionado].esMock);

  constructor(
    protected http: HttpClient
  ) { }

  protected GetResource<T>(endpoint: string, parameters?: any): Observable<T> {
    const url = this.constructUrl(endpoint, parameters);
    return this.http.get<T>(url);
  }

  protected DeleteResource<T>(endpoint: string, parameters?: any): Observable<T> {
    const url = this.constructUrl(endpoint, parameters);
    return this.http.delete<T>(url);
  }

  protected PostResource<T>(endpoint: string, body: T | any, parameters?: any): Observable<T> {
    const url = this.constructUrl(endpoint, parameters);
    return this.http.post<T>(url, body);
  }

  protected PutResource<T>(endpoint: string, body: T, parameters?: any): Observable<T> {
    const url = this.constructUrl(endpoint, parameters);
    return this.http.put<T>(url, body);
  }

  protected PatchResource<T>(endpoint: string, body: T, parameters?: any): Observable<T> {
    const url = this.constructUrl(endpoint, parameters);
    return this.http.patch<T>(url, body);
  }

  protected constructUrl(endpoint: string, parameters?: any): string {
    let formatted = endpoint;
    const tokens = parameters;
    // tslint:disable-next-line: prefer-const
    let query = {};
    if (tokens) {
      // tslint:disable-next-line:forin
      for (const propName in tokens) {
        const propValue = tokens[propName];

        let temp;
        if (this.esMock) {
          temp = formatted.replace('/:' + propName, '');
        } else {
          temp = formatted.replace(':' + propName, propValue);
        }

        if (temp === formatted) {
          query[propName] = propValue;
        }
        formatted = temp;
      }
    }

    const querystring = this.toQueryString(query);
    if (formatted && querystring) {
      if (formatted.indexOf('?') !== -1) {
        formatted = formatted + querystring;
      } else {
        formatted = `${formatted}?${querystring}`;
      }
    }

    return formatted;
  }

  protected toQueryString(keyValuePair: any): string {
    let queryString = '';
    for (const key in keyValuePair) {
      if (keyValuePair.hasOwnProperty(key)) {
        const value = keyValuePair[key];
        if (queryString) {
          queryString += '&';
        }
        queryString += `${key}=${value}`;
      }
    }
    return queryString;
  }

}
