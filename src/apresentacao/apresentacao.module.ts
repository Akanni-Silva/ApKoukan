import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apresentacao } from './entities/apresentacao.entity';
import { ApresentacaoService } from './services/apresentacao.service';
import { ApresentacaoController } from './controllers/apresentacao.controller';
import { ArtistaModule } from '../artista/artista.module';
import { InstrumentoModule } from '../instrumento/instrumento.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { ApresentacaoArtista } from './entities/apresentacaoArtista.entity';
import { ApresentacaoInstrumento } from './entities/apresentacaoInstrumento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Apresentacao,
      ApresentacaoArtista,
      ApresentacaoInstrumento,
    ]),
    ArtistaModule,
    InstrumentoModule,
    UsuarioModule,
  ],
  providers: [ApresentacaoService],
  controllers: [ApresentacaoController],
  exports: [],
})
export class ApresentacaoModule {}
