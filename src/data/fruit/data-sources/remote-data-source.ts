import { FruitResponse } from './../responses/fruit-response';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const BASE_URL = 'http://localhost:3000/fruits';

export abstract class RemoteDataSource {
  abstract getFruits(): Promise<FruitResponse[]>;
}

export class RemoteDataSourceImpl implements RemoteDataSource {
  constructor(private httpClient: HttpClient) {}

  async getFruits(): Promise<FruitResponse[]> {
    return firstValueFrom(this.httpClient.get(BASE_URL)) as any;
  }
}
