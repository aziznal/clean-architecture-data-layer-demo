import { NgModule, Provider } from '@angular/core';

import { FruitRepository } from '../core/fruit/fruit-repository';
import {
  CreateFruitUseCase,
  CreateFruitUseCaseImpl,
} from '../core/fruit/usecases/create-fruit-usecase';
import {
  GetFruitsUseCase,
  GetFruitsUseCaseImpl,
} from '../core/fruit/usecases/get-fruits-usecase';
import { FruitRepositoryImpl } from '../data/fruit/fruit-repository-impl';

const providers: Provider[] = [
  {
    provide: GetFruitsUseCase,
    useFactory: (fruitRepository: FruitRepository) => {
      return new GetFruitsUseCaseImpl(fruitRepository);
    },
    deps: [FruitRepository],
  },
  {
    provide: CreateFruitUseCase,
    useFactory: (fruitRepository: FruitRepository) => {
      return new CreateFruitUseCaseImpl(fruitRepository);
    },
    deps: [FruitRepository],
  },
];

@NgModule({
  exports: [],
  providers: [...providers],
})
export class CoreDependencyModule {}
