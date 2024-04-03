import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    @Get()
    findAll(){
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.tasksService.findOne(id);
    }

    @Post()
    create(@Body() body){
        return this.tasksService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body){
        return this.tasksService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.tasksService.delete(id);
    }

}
