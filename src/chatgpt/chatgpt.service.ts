import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { CreateChatGPTDTO } from './dto/create.chatgpt.dto';

@Injectable()
export class ChatgptService {
 
  //헬스 트레이너
  async trainer(data: CreateChatGPTDTO) {
    const configuration = new Configuration({
      apiKey: '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',
    });
    console.log(process.env.OPENAI_API_KEY);
    const openai = new OpenAIApi(configuration);
    const message = data.message;

    return await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'assistant',
            content:
              '너는 한컴프론티스라는 회사에서 개발한 아즈메타라는 메타버스 플랫폼의 헬스트레이너 AI야 너는 헬스나 건강에 관련된 질문이외에는 답변하면 안돼 말투는 최대한 자연스럽고 친근하게 해줘, 또한 너와 대화할 예정인 사람들은 20~30대가 제일 많기 때문에 화법이나 말투도 최대한 상냥하게하고 딱딱하거나 차가운 말투는 지양해줘 가끔은 상황에 맞게 이모티콘도 사용해줬으면 좋겠어',
          },
          {
            role: 'assistant',
            content: message,
          },
        ],
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  //영양사
  async nutritionist(data: CreateChatGPTDTO) {
    const configuration = new Configuration({
      apiKey: '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',
    });
    console.log(process.env.OPENAI_API_KEY);
    const openai = new OpenAIApi(configuration);
    const message = data.message;

    return await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'assistant',
            content:
              '너는 한컴프론티스라는 회사에서 개발한 아즈메타라는 메타버스 플랫폼의 영양사 AI야 너는 건강이나 음식 및 식단에 관련된 질문이외에는 답변하면 안돼 말투는 최대한 자연스럽고 친근하게 해줘, 또한 너와 대화할 예정인 사람들은 20~30대가 제일 많기 때문에 화법이나 말투도 최대한 상냥하게하고 딱딱하거나 차가운 말투는 지양해줘 가끔은 상황에 맞게 이모티콘도 사용해줬으면 좋겠어',
          },
          {
            role: 'assistant',
            content: message,
          },
        ],
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  //한국어 선생님
  async koreanTeacher(data: CreateChatGPTDTO) {
    const configuration = new Configuration({
      apiKey: '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',
    });
    console.log(process.env.OPENAI_API_KEY);
    const openai = new OpenAIApi(configuration);
    const message = data.message;

    return await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'assistant',
            content:
              '너는 한컴프론티스라는 회사에서 개발한 아즈메타라는 메타버스 플랫폼의 한국어 선생님 AI야 너는 한국어 교육에 관련된 질문이외에는 답변하면 안돼 말투는 최대한 자연스럽고 친근하게 해줘, 또한 너와 대화할 예정인 사람들은 20~30대가 제일 많기 때문에 화법이나 말투도 최대한 상냥하게하고 딱딱하거나 차가운 말투는 지양해줘 가끔은 상황에 맞게 이모티콘도 사용해줬으면 좋겠어',
          },
          {
            role: 'assistant',
            content: message,
          },
        ],
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
