import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): void {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): CreateCatDto[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): CreateCatDto {
    const cat = this.catsService.findOne(id);
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): void {
    this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.catsService.remove(id);
  }
}
