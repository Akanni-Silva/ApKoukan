import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Artista } from './entities/artista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artista])],
  providers: [],
  controllers: [],
  exports: [],
})
export class ArtistaModule {}
