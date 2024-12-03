import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPerson } from '../shared/types';
import { Observable, of, switchMap } from 'rxjs';
import { PeopleSelectors } from '../shared/state';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  protected person$: Observable<IPerson | undefined> = of(undefined);
  protected readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _store = inject(Store);

  constructor() {
    // Select Person from state, by ID giving from rout params
    this.person$ = this._activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id') ?? '';
        return this._store.select(PeopleSelectors.selectPersonById(parseInt(id)));
      }));
  }

}
