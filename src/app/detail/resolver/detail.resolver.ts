import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from "../../shared/services";
import { IPerson } from '../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver {

  protected readonly _apiService = inject(ApiService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPerson> {
    const routePath = route.routeConfig?.path;
    // if route parent param exists its album or title page, otherwise its root-page (overview)
    // we get id only from root-page (overview), on album- or title-page it must be taken from parent
    const id = route.parent?.params['id'] ?? route.params['id'];
    return this._apiService.getPerson(id);
  }
}
