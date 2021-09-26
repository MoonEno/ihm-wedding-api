import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  /** 사용할 PORT 설정 */  
  await app.listen(6666);
}
bootstrap();
