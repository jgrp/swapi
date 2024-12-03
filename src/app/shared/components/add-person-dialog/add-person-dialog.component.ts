import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { IPerson } from '../../types';

@Component({
  selector: 'app-add-person-dialog',
  templateUrl: './add-person-dialog.component.html',
  styleUrl: './add-person-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPersonDialogComponent implements OnInit {
  protected personForm!: FormGroup;
  private _dialogRef = inject<DialogRef<IPerson>>(DialogRef<IPerson>);
  private _fb = inject(FormBuilder);

  ngOnInit(): void {
    this.personForm = this._fb.group({
      name: ['', [Validators.required]],
      height: [''],
      mass: [''],
      birth_year: [''],
      gender: ['']
    });
  }

  /**
   * Collects data from the form and send to the dialog ref
   */
  onSubmit(): void {
    if (this.personForm.valid) {
      this._dialogRef.close(this.personForm.value as IPerson);
    }
  }

}
