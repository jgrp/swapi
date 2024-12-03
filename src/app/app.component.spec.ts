import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      MockModule(RouterModule.forRoot([])),
      MockComponent(ListComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'swapi'`, () => {
    expect(spectator.component.title).toEqual('swapi');
  });

  it('should render title', () => {
    spectator.detectChanges();
    expect(spectator.query('h1')?.textContent).toContain('Swapi List');
  });

  it('should display list component', () => {
    expect(spectator.query(ListComponent)).toBeTruthy();
  })
});
