import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { expand, map, Observable, of, reduce, takeWhile } from 'rxjs';
import { IApiResult } from '../types/IApiResult.interface';
import { IPerson } from '../types';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected readonly _http = inject(HttpClient);

  /**
   * Collects all paginated people from an API.
   * Calls API recursively and stops when `response.next` is null.
   * @returns An Observable of all people.
   */
  public getPeople(): Observable<IPerson[]> {
    return this._http.get<IApiResult<IPerson>>(`${BASE_URL}/people`).pipe(
      // Recursively call, until next is null
      expand((res) =>
        res.next ? this._http.get<IApiResult<IPerson>>(res.next) : of(null)
      ),
      takeWhile(res => res !== null),
      map((res) => res.results),
      reduce(((allResults, currentResults) => [...allResults, ...currentResults]))
    );
  }

  /**
   * Get Person data from Api
   * @param id
   * @returns An Observable of person data.
   */
  public getPerson(id: number): Observable<IPerson> {
    return this._http.get<IPerson>(`${BASE_URL}/people/${id}`);
  }
}
