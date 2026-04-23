import { Expose } from 'class-transformer';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';

export class VerUsuarioDto {
  @Expose()
  readonly nome: string;
  @Expose()
  readonly foto: string;
  @Expose()
  readonly concertos: Apresentacao[];
}
