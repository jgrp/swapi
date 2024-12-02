import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { IPerson } from '../../types';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrl: './add-person-form.component.scss'
})
export class AddPersonFormComponent implements OnInit {
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

  onSubmit(): void {
    if (this.personForm.valid) {
      this._dialogRef.close(this.personForm.value as IPerson);
    }
  }

}
