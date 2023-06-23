import {
  Body,
  Controller,
  HttpStatus,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatgptService } from './chatgpt.service';
import { CreateChatGPTDTO } from './dto/create.chatgpt.dto';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}


  @ApiOperation({ summary: '헬스트레이너' })
  //   @UseGuards(LoggedInGuard)
  @Post('trainer')
  async getChatGPTFrontis(@Body() data: CreateChatGPTDTO) {
    return await this.chatgptService.trainer(data);
  }

  @ApiOperation({ summary: '영양사' })
  //   @UseGuards(LoggedInGuard)
  @Post('nutritionist')
  async nutritionist(@Body() data: CreateChatGPTDTO) {
    return await this.chatgptService.nutritionist(data);
  }
  @ApiOperation({ summary: '한국어 선생님' })
  //   @UseGuards(LoggedInGuard)
  @Post('koreanTeacher')
  async koreanTeacher(@Body() data: CreateChatGPTDTO) {
    return await this.chatgptService.koreanTeacher(data);
  }
}
