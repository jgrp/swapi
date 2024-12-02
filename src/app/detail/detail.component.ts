import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPerson } from '../shared/types';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  protected person!: IPerson;
  protected readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _store = inject(Store);

  ngOnInit() {
    this._activatedRoute.data.subscribe(({data}) => this.person = data);
  }
}
