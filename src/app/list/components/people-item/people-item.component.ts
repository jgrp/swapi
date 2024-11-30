import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPeople } from '../../../shared/types';

@Component({
  selector: 'app-people-item',
  standalone: false,
  templateUrl: './people-item.component.html',
  styleUrl: './people-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleItemComponent {

  @Input() data!: IPeople;
  @Input() id!: number;
  // protected data = input<IPeople>();
}
