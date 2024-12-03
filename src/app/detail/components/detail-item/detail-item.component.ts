import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPerson } from '../../../shared/types';

@Component({
  selector: 'app-detail-item',
  standalone: false,
  templateUrl: './detail-item.component.html',
  styleUrl: './detail-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailItemComponent {
  @Input() person: IPerson | null | undefined;
}
