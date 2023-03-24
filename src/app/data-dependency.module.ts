import { FruitRepositoryImpl } from './../data/fruit/fruit-repository-impl';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitRepository } from '../core/fruit/fruit-repository';

@NgModule({
  providers: [
    {
      provide: FruitRepository,
      useFactory: () => {
        return new FruitRepositoryImpl();
      },
    },
  ],
})
export class DataDependencyModule {}
