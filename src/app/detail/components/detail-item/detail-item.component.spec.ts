import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DetailItemComponent } from './detail-item.component';
import { IPerson } from '../../../shared/types';
import { MockModule } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';

describe('DetailItemComponent', () => {
  let spectator: Spectator<DetailItemComponent>;
  const mockPerson = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
  } as IPerson;

  const createComponent = createComponentFactory({
    component: DetailItemComponent,
    imports: [MockModule(MatCardModule)]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display person data', () => {
    spectator.setInput('person', mockPerson);
    const header = spectator.query('[data-testid="person.header"]');
    const content = spectator.query('[data-testid="person.content"]');
    expect(header).toContainText(mockPerson.name);
    expect(content).toContainText(`Height: ${mockPerson.height} cm`);
    expect(content).toContainText(`Mass: ${mockPerson.mass} kg`);
    expect(content).toContainText(`Birth Year: ${mockPerson.birth_year}`);
    expect(content).toContainText(`Gender: ${mockPerson.gender}`);
  });
});
