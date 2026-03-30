import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Artista } from './entities/artista.entity';
import { ArtistaService } from './services/artista.service';

@Module({
  imports: [TypeOrmModule.forFeature([Artista])],
  providers: [ArtistaService],
  controllers: [],
  exports: [],
})
export class ArtistaModule {}
