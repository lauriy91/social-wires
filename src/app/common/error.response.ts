/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class ErrorBaseResponse {
	@ApiProperty()
	public message: string;

	@ApiProperty()
	public code: number;

	@ApiProperty()
	public reqId: string;
}
