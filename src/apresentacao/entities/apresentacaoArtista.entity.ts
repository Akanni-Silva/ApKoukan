import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artista } from '../../artista/entities/artista.entity';
import { Apresentacao } from './apresentacao.entity';

@Entity('tb_apresentacao_artista')
export class ApresentacaoArtista {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Artista, (artista) => artista.apresentacoes, {
    onDelete: 'CASCADE',
  })
  artistaId: Artista;

  @ManyToOne(() => Apresentacao, (apresentacao) => apresentacao.artistas, {
    onDelete: 'CASCADE',
  })
  apresentacaoId: Apresentacao;
}
