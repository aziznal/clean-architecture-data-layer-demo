import { FruitEntity } from './../core/fruit/entities/fruit-entity.model';
import { Component } from '@angular/core';
import { GetFruitsUseCase } from '../core/fruit/usecases/get-fruits-usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fruits: FruitEntity[] = [];

  constructor(private getFruitUsecase: GetFruitsUseCase) {}

  ngOnInit() {
    this.getFruitUsecase.getFruits().then((fruits) => {
      this.fruits = fruits;
    });
  }
}
