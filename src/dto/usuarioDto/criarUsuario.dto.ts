import { Expose } from 'class-transformer';

export class CriarUsuarioDto {
  @Expose()
  readonly nome: string;
  readonly email: string;

  readonly senha: string;
}
