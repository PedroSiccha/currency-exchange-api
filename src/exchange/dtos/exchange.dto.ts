import { IsNotEmpty, IsString } from "class-validator";

export class ExchangeDto {

      @IsNotEmpty()
      @IsString()
      currencyFrom: string;

      @IsNotEmpty()
      @IsString()
      currencyTo: string;
}