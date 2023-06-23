import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChatGPTDTO {
  @ApiProperty({
    example: '대화 주제를 추천해줘 ',
    description: 'chatGPT에게 물어볼 내용',
  })
  @IsString()
  @IsNotEmpty()
  public message: string;
}
