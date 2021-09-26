import { Body, Controller, Param } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { PeopleService } from './people.service';
import { People } from './entities/people.entity';

@Controller('people')
export class PeopleController {

    constructor (private readonly peopleService: PeopleService) { }
    
    @Get("/people")
    getPeople(@Param('phone') phone:string) : People {
        return this.peopleService.getPeopleInfo(phone);
    }

}
