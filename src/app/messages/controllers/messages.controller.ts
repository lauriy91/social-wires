/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('api/messages')
export class MessagesController {

    @Get()
    getAll(){
        return [1,2,3]
    }
}
