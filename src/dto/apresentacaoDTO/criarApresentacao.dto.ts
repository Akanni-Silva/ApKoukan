import { ApiProperty } from '@nestjs/swagger';

export class CriaApresentacaoDto {
  @ApiProperty()
  readonly userId: number;
  @ApiProperty()
  readonly musica: string;
  @ApiProperty()
  readonly artistasIds: number[];
  @ApiProperty()
  readonly instrumentosIds: number[];
}
