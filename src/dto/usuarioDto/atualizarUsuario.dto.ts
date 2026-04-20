import { Expose } from 'class-transformer';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';

export class AtualizarUsuarioDto {
  readonly id: number;
  @Expose()
  readonly nome: string;
  readonly email: string;
  readonly senha: string;
  @Expose()
  readonly concertos: Apresentacao[];
}
