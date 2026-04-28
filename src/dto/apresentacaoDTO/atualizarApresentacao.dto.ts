import { ApiProperty } from '@nestjs/swagger';
import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

export class AtualizarApresentacaoDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly usuario: Usuario;
  @ApiProperty()
  readonly musica: string;
  @ApiProperty()
  readonly artistas: ApresentacaoArtista[];
  @ApiProperty()
  readonly instrumentos: ApresentacaoInstrumento[];
}
