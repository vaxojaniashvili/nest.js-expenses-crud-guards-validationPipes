import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ExpensesDto {
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsOptional()
  TimeToBuy?: Date;
}
