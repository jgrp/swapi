import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from '../../../shared/types';

@Component({
  selector: 'app-people-item',
  standalone: false,
  templateUrl: './people-item.component.html',
  styleUrl: './people-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleItemComponent {

  @Input() data!: IPerson;
  @Output() removeItem = new EventEmitter<number>();

  protected onRemoveClick(): void {
    this.removeItem.emit(this.data.id);
  }
}
