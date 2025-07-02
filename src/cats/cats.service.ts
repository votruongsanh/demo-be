import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    { name: 'cat1', age: 1, breed: 'breed1' },
    { name: 'cat2', age: 2, breed: 'breed2' },
    { name: 'cat3', age: 3, breed: 'breed3' },
  ];

  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: Cat): void {
    this.cats.push(cat);
  }
}
