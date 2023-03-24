import { CreateFruitRequest } from './../requests/create-fruit-request';
import { FruitResponse } from './../responses/fruit-response';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const BASE_URL = 'http://localhost:3000/fruits';

export abstract class RemoteDataSource {
  abstract getFruits(): Promise<FruitResponse[]>;

  abstract createFruit(
    newFruitRequest: CreateFruitRequest
  ): Promise<FruitResponse>;
}

export class RemoteDataSourceImpl implements RemoteDataSource {
  constructor(private httpClient: HttpClient) {}

  async getFruits(): Promise<FruitResponse[]> {
    return firstValueFrom(this.httpClient.get(BASE_URL)) as any;
  }

  async createFruit(
    newFruitRequest: CreateFruitRequest
  ): Promise<FruitResponse> {
    const newId = Math.floor(Math.random() * 1000).toString();

    (await firstValueFrom(
      this.httpClient.post(BASE_URL, {
        ...newFruitRequest,
        id: newId,
      })
    )) as any;

    return {
      ...newFruitRequest,
      id: newId,
      createdDate: new Date().toISOString(),
    };
  }
}
