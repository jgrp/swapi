import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddPersonDialogComponent } from './add-person-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { IPerson } from '../../types';

describe('AddPersonDialogComponent', () => {
  let spectator: Spectator<AddPersonDialogComponent>;
  const dialogRefMock = {
    close: jest.fn(),
  };

  const mockPerson = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
  } as IPerson;

  const createComponent = createComponentFactory({
    component: AddPersonDialogComponent,
    imports: [
      MockModule(ReactiveFormsModule),
      MockModule(MatFormFieldModule),
      MockModule(MatInputModule),
      MockModule(MatDialogModule),
      MockModule(MatButtonModule),
    ],
    providers: [
      {provide: DialogRef, useValue: dialogRefMock},
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should enable submit button when form is valid', () => {
    // to get access, because as protected
    spectator.component['personForm'].setValue(mockPerson);
    const button = spectator.query('[data-testid="button.submit"]') as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });

  it('should call DialogRef.close with form data on submit', () => {
    spectator.component['personForm'].setValue(mockPerson);
    spectator.component.onSubmit();
    expect(dialogRefMock.close).toHaveBeenCalledWith(mockPerson);
  });

  it('should not call DialogRef.close if form is invalid on submit', () => {
    spectator.component['personForm'].setValue({
      name: '',
      height: '',
      mass: '',
      birth_year: '',
      gender: '',
    });
    spectator.component.onSubmit();
    expect(dialogRefMock.close).not.toHaveBeenCalled();
  });

  it('should have call DialogRef.close if form is valid', () => {
    spectator.component['personForm'].setValue(mockPerson);
    spectator.component.onSubmit();
    expect(dialogRefMock.close).toHaveBeenCalledWith(mockPerson);
  });
});
