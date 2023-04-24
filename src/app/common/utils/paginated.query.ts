/* eslint-disable prettier/prettier */
import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
} from "@nestjs/class-validator";

export enum Order {
	ASC = 'asc',
	DESC = 'desc'
}

// add pagination ti the search
export class PaginatedQuery {

  // search order
  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  @IsOptional()
  readonly order? = Order.ASC;

  // current page
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @IsInt()
  @IsOptional()
  readonly page?: number = 1;

  // limit of records per search
  @ApiPropertyOptional({
    minimum: 1,
    default: 100,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  readonly limit: number = 100;

  get skip(): number {
    return ((this.page ?? 1) - 1) * this.limit;
  }
}
