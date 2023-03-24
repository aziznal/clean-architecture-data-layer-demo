import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FruitRepository } from '../core/fruit/fruit-repository';
import {
  RemoteDataSource,
  RemoteDataSourceImpl,
} from '../data/fruit/data-sources/remote-data-source';
import { FruitRepositoryImpl } from '../data/fruit/fruit-repository-impl';

@NgModule({
  providers: [
    {
      provide: RemoteDataSource,
      useFactory: (httpClient: HttpClient) => {
        return new RemoteDataSourceImpl(httpClient);
      },
      deps: [HttpClient],
    },
    {
      provide: FruitRepository,
      useFactory: (remoteDataSource: RemoteDataSource) => {
        return new FruitRepositoryImpl(remoteDataSource);
      },
      deps: [RemoteDataSource],
    },
  ],
})
export class DataDependencyModule {}
