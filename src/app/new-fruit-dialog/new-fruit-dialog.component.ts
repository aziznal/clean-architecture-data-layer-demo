import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

export interface NewFruitDialogOutput {
  name: string;
  description: string;
  pricePerKilo: number;
  thumbnailUrl: string;
}

@Component({
  templateUrl: './new-fruit-dialog.component.html',
  styleUrls: ['./new-fruit-dialog.component.scss'],
})
export class NewFruitDialogComponent {
  formGroup: FormGroup;

  constructor(
    public matDialogRef: MatDialogRef<
      NewFruitDialogComponent,
      NewFruitDialogOutput
    >
  ) {
    this.matDialogRef.updateSize('500px', 'auto');

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      pricePerKilo: new FormControl(0, [Validators.required]),
      thumbnailUrl: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.matDialogRef.close({
      name: this.formGroup.get('name')?.value,
      description: this.formGroup.get('description')?.value,
      pricePerKilo: this.formGroup.get('pricePerKilo')?.value,
      thumbnailUrl: this.formGroup.get('thumbnailUrl')?.value,
    });
  }
}
