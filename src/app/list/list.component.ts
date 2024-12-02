import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PeopleActions, PeopleSelectors } from '../shared/state';
import { Dialog } from '@angular/cdk/dialog';
import { AddPersonFormComponent } from '../shared/components/add-person-form/add-person-form.component';
import { IPerson } from '../shared/types';


@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  protected people$: Observable<IPerson[]>;
  protected loading$: Observable<boolean>;
  private readonly _store = inject(Store);
  private readonly _dialog = inject(Dialog);

  constructor() {
    this.people$ = this._store.select(PeopleSelectors.selectAllPeople);
    this.loading$ = this._store.select(PeopleSelectors.selectLoading);
  }

  ngOnInit() {
    this._store.dispatch(PeopleActions.loadPeople());
  }

  protected onRemovePerson(id: number): void {
    this._store.dispatch(PeopleActions.removePerson({personId: id}));
  }

  protected onAddPerson(): void {
    console.log('onAddPerson');
    const dialogRef = this._dialog.open(AddPersonFormComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.closed.subscribe(result => {
      if (result) {
        this._store.dispatch(PeopleActions.addPerson({person: result as IPerson}));
      }
    });
  }
}
