import { TypeOrmModule } from '@nestjs/typeorm';
import { Tocador } from './entities/tocador.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Tocador])],
  providers: [],
  controllers: [],
  exports: [],
})
export class TocadorModule {}
