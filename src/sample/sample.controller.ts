import { Controller, Get, Param, Query } from '@nestjs/common';
import { SampleService } from './sample.service';
import { Sample } from './entities/sample.entity';

@Controller('sample')
export class SampleController {

    constructor (private readonly sampleService: SampleService) { };

    @Get("")
    getAll(): Sample[] {
        return this.sampleService.getAll();
    }

    @Get("search")
    getSearch(@Query("name") name:string) {
        return `getSearch`;
    }

    @Get(":id")
    getOne(@Param('id') movieId : string) {
        return `$get Id ${ movieId }`;
    }
}
