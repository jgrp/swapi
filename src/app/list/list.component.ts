import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { IPeople } from '../shared/types';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  protected readonly _apiService = inject(ApiService);

  protected people$: Observable<IPeople[]>;

  constructor() {
    this.people$ = this._apiService.getPeoples();
  }


  ngOnInit() {
  }

}
