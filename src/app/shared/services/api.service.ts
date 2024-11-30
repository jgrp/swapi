import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPeople } from '../types/IPeople.interface';
import { IApiResult } from '../types/IApiResult.interface';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected readonly _http = inject(HttpClient);

  constructor() {
  }

  public getPeoples(): Observable<IPeople[]> {
    return this._http.get<IApiResult<IPeople>>(`${BASE_URL}/people`).pipe(
      map((res) => res.results)
    );
  }
}
