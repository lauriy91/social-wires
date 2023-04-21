/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommonService } from './services/common.service';

@Module({
controllers: [],
providers: [CommonService],
})
export class CommonModule {}
