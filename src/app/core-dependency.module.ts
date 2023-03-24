import { FruitRepositoryImpl } from './../data/fruit/fruit-repository-impl';
import { NgModule, Provider } from '@angular/core';

import { FruitRepository } from '../core/fruit/fruit-repository';
import {
  GetFruitsUseCase,
  GetFruitsUseCaseImpl,
} from '../core/fruit/usecases/get-fruits-usecase';

const providers: Provider[] = [
  {
    provide: FruitRepository,
    useFactory: () => {
      return new FruitRepositoryImpl();
    },
  },
  {
    provide: GetFruitsUseCase,
    useFactory: (fruitRepository: FruitRepository) => {
      return new GetFruitsUseCaseImpl(fruitRepository);
    },
    deps: [FruitRepository],
  },
];

@NgModule({
  exports: [],
  providers: [...providers],
})
export class CoreDependencyModule {}
