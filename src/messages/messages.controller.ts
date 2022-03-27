import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  
  @Get('/')
  listMessages(): string {
    return "Get Messages";
  }

  @Post('/')
  createMessage(@Body() body: CreateMessageDto): string {
    console.log(body);
    return "You are about to create a message";
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): string {
    console.log(id);
    return "Single Id";
  }



}
