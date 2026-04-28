import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CriarUsuarioDto {
  @Expose()
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly senha: string;
}
