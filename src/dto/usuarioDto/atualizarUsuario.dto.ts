import { Expose } from 'class-transformer';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';
import { ApiProperty } from '@nestjs/swagger';

export class AtualizarUsuarioDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  @Expose()
  readonly nome: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly senha: string;
  @ApiProperty()
  @Expose()
  readonly concertos: Apresentacao[];
}
