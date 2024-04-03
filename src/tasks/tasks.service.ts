import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './tasks.entity';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    async findAll(): Promise<Task[]> {
        return await this.taskModel.find().exec();
    }

    async findOne(id: string): Promise<Task> {
        return await this.taskModel.findById(id).exec();
    }

    async create(body): Promise<Task> {
        const newTask = new this.taskModel(body);
        return await newTask.save();
    }

    async update(id: string, body): Promise<Task> {
        return await this.taskModel.findByIdAndUpdate(id, body).exec();
    }

    async delete(id: string): Promise<Task> {
        return await this.taskModel.findByIdAndDelete(id).exec();
    }

}
