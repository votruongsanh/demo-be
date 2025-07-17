import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [
    { id: '1', name: 'cat1', age: 1, breed: 'breed1' },
    { id: '2', name: 'cat2', age: 2, breed: 'breed2' },
    { id: '3', name: 'cat3', age: 3, breed: 'breed3' },
  ];

  create(cat: CreateCatDto): void {
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    return this.cats;
  }

  findOne(id: string): CreateCatDto {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  update(id: string, updateCatDto: CreateCatDto): void {
    const cat = this.findOne(id);
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    cat.name = updateCatDto.name;
    cat.age = updateCatDto.age;
    cat.breed = updateCatDto.breed;
  }

  remove(id: string): void {
    const cat = this.findOne(id);
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    this.cats = this.cats.filter((cat) => cat.id !== id);
  }
}
