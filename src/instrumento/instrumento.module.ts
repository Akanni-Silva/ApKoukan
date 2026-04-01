import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Instrumento } from './entities/instrumento.entity';
import { InstrumentoService } from './services/instrumento.service';
import { InstrumentoController } from './controllers/instrumento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Instrumento])],
  providers: [InstrumentoService],
  controllers: [InstrumentoController],
  exports: [InstrumentoService],
})
export class InstrumentoModule {}
