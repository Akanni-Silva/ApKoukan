import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Artista } from './entities/artista.entity';
import { ArtistaService } from './services/artista.service';
import { ArtistaController } from './controllers/artista.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Artista])],
  providers: [ArtistaService],
  controllers: [ArtistaController],
  exports: [ArtistaService],
})
export class ArtistaModule {}
