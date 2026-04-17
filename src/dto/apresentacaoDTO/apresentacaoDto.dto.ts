import { Expose } from 'class-transformer';

export class ApresentacaoDto {
  readonly userId: number;
  @Expose()
  readonly musica: string;
  readonly artistasIds: number[];
  readonly instrumentosIds: number[];
}
