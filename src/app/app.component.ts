import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  NewFruitDialogComponent,
  NewFruitDialogOutput,
} from './new-fruit-dialog/new-fruit-dialog.component';

import { FruitEntity } from '../core/fruit/entities/fruit-entity.model';

import { CreateFruitUseCase } from '../core/fruit/usecases/create-fruit-usecase';
import { GetFruitsUseCase } from '../core/fruit/usecases/get-fruits-usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fruits: FruitEntity[] = [];

  constructor(
    private matDialog: MatDialog,

    private getFruitUsecase: GetFruitsUseCase,
    private createFruitUsecase: CreateFruitUseCase
  ) {}

  ngOnInit() {
    this.getFruitUsecase.execute().then((fruits) => {
      this.fruits = fruits;
    });
  }

  openNewFruitDialog() {
    const dialogRef = this.matDialog.open<
      NewFruitDialogComponent,
      any,
      NewFruitDialogOutput
    >(NewFruitDialogComponent);

    dialogRef.afterClosed().subscribe((newFruit) => {
      if (newFruit) {
        this.#createFruit(newFruit);
      }
    });
  }

  #createFruit(newFruit: NewFruitDialogOutput) {
    this.createFruitUsecase.execute(newFruit).then((fruit) => {
      this.fruits.push(fruit);
    });
  }
}
