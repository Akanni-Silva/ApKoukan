import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

export class AtualizarApresentacaoDto {
  readonly id: number;
  readonly usuario: Usuario;
  readonly musica: string;
  readonly artistas: ApresentacaoArtista[];
  readonly instrumentos: ApresentacaoInstrumento[];
}
