import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apresentacao } from './entities/apresentacao.entity';
import { ApresentacaoService } from './services/apresentacao.service';
import { ApresentacaoController } from './controllers/apresentacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apresentacao])],
  providers: [ApresentacaoService],
  controllers: [ApresentacaoController],
  exports: [],
})
export class ApresentacaoModule {}
