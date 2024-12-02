import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from '../shared/types';
import { Store } from '@ngrx/store';
import { PeopleActions, PeopleSelectors } from '../shared/state';


@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  protected people$: Observable<IPeople[]>;
  protected loading$: Observable<boolean>;
  private readonly _store = inject(Store);

  constructor() {
    this.people$ = this._store.select(PeopleSelectors.selectAllPeople);
    this.loading$ = this._store.select(PeopleSelectors.selectLoading);
  }

  ngOnInit() {
    this._store.dispatch(PeopleActions.loadPeople());
  }

  protected removePerson(id: number): void {
    this._store.dispatch(PeopleActions.removePerson({personId: id}));
  }
}
