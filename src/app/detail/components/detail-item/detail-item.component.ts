import { Component, Input } from '@angular/core';
import { IPeople } from '../../../shared/types';

@Component({
  selector: 'app-detail-item',
  standalone: false,

  templateUrl: './detail-item.component.html',
  styleUrl: './detail-item.component.scss'
})
export class DetailItemComponent {
  @Input() person!: IPeople;
}
