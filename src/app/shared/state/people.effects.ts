import { inject, Injectable } from '@angular/core';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as PeopleActions from './people.actions';
import { ApiService } from '../services';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class PeopleEffects {
  private readonly _apiService = inject(ApiService);
  private readonly _actions$ = inject(Actions);

  loadPeople$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PeopleActions.loadPeople),
      mergeMap(() =>
        this._apiService.getPeople().pipe(
          map((people) => PeopleActions.loadPeopleSuccess({people})),
          catchError((error) =>
            of(PeopleActions.loadPeopleFailure({error: error.message}))
          )
        )
      )
    )
  );

}

