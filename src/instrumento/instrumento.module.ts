import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Instrumento } from './entities/instrumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrumento])],
  providers: [],
  controllers: [],
  exports: [],
})
export class InstrumentoModule {}
