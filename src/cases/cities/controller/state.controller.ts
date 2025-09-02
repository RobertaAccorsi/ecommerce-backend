import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { promises } from "dns";
import { get } from "http";
import { State } from "../entities/states.entity";
import { StateService } from "../services/state.service";


@Controller('State')
export class StateController{

    constructor(private readonly service: StateService){}

    @Get()
    findAll(): Promise<State[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<State | null>{
        const found = this.service.findByID(id);
        
        if(!found){
            throw new HttpException('State not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }

    @Post()
    create(@Body() city: State) : Promise<State>{
        return this.service.save(city);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id: string, @Body () city: State): Promise<State>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('State not found', HttpStatus.NOT_FOUND);
        }

        city.id = id;

        return this.service.save(city);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('State not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);

    }
}