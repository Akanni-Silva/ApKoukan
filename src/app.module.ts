import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artista } from './artista/entities/artista.entity';
import { ArtistaModule } from './artista/artista.module';
import { Instrumento } from './instrumento/entities/instrumento.entity';
import { InstrumentoModule } from './instrumento/instrumento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_apkoukan',
      entities: [Instrumento, Artista],
      synchronize: true,
    }),
    InstrumentoModule,
    ArtistaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
