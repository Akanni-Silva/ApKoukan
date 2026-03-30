import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Instrumento } from './entities/instrumento.entity';
import { InstrumentoService } from './services/instrumento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Instrumento])],
  providers: [InstrumentoService],
  controllers: [],
  exports: [],
})
export class InstrumentoModule {}
