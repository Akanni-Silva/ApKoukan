import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artista } from './artista/entities/artista.entity';
import { ArtistaModule } from './artista/artista.module';
import { Instrumento } from './instrumento/entities/instrumento.entity';
import { InstrumentoModule } from './instrumento/instrumento.module';
import { Apresentacao } from './apresentacao/entities/apresentacao.entity';
import { ApresentacaoModule } from './apresentacao/apresentacao.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_apkoukan',
      entities: [Instrumento, Artista, Apresentacao, Usuario],
      synchronize: true,
    }),
    InstrumentoModule,
    ArtistaModule,
    ApresentacaoModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
