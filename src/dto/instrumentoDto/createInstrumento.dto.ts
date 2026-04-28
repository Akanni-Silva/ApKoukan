import { ApiProperty } from "@nestjs/swagger";

export class CriarInstrumentoDto {
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly posicao: number;
}
