import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeople } from '../shared/types';
import { Store } from '@ngrx/store';
import { PeopleActions } from '../shared/state';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  protected person!: IPeople;
  protected readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _store = inject(Store);

  ngOnInit() {
    this._activatedRoute.data.subscribe(({data}) => this.person = data);
  }

  protected removePerson(id: number): void {
    console.log('removePerson', id);
    this._store.dispatch(PeopleActions.removePerson({personId: id}));
  }

}
