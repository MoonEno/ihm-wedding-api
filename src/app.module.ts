import { Module } from '@nestjs/common';
import { SampleController } from './sample/sample.controller';
import { SampleService } from './sample/sample.service';
import { PeopleController } from './people/people.controller';
import { PeopleService } from './people/people.service';

@Module({
  imports: [],
  controllers: [SampleController, PeopleController],
  providers: [SampleService, PeopleService],
})
export class AppModule {}
