import { Injectable } from '@nestjs/common';
import { People } from './entities/people.entity';

@Injectable()
export class PeopleService {

    private people: People = {};

    getPeopleInfo(phone: stirng): People {
        return this.people;
    }

}
