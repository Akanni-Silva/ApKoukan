import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apresentacao } from './entities/apresentacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apresentacao])],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApresentacaoModule {}
