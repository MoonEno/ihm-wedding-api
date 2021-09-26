import { Injectable } from '@nestjs/common';
import { Sample } from './entities/sample.entity';

@Injectable()
export class SampleService {

    private samples: Sample[] = [];

    getAll(): Sample[] {
        return this.samples;
    }
}
