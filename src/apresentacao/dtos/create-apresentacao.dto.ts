import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApresentacaoDto {
  @IsNotEmpty()
  @IsString()
  musica: string;

  @IsArray()
  @IsNumber({}, { each: true })
  artistasIds: number[];

  @IsArray()
  @IsNumber({}, { each: true })
  instrumentosIds: number[];
}
