import { ApiProperty } from "@nestjs/swagger";

export class criarArtistaDto {
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly posicao: number;
}
