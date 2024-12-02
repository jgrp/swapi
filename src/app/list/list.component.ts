import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PeopleActions, PeopleSelectors } from '../shared/state';
import { Dialog } from '@angular/cdk/dialog';
import { IPerson } from '../shared/types';
import { AddPersonDialogComponent } from '../shared/components/add-person-dialog/add-person-dialog.component';


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

  protected onRemovePerson(id: string): void {
    this._store.dispatch(PeopleActions.removePerson({personId: id}));
  }

  protected onAddPerson(): void {
    const dialogRef = this._dialog.open(AddPersonDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.closed.subscribe(result => {
      console.log(result);
      if (result) {
        this._store.dispatch(PeopleActions.addPerson({person: result as IPerson}));
      }
    });
  }
}
