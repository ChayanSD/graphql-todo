import Todo from "../models/todo";
import ITodo from "../types/todoTypes";
class TodoRepository{

    async getAll() : Promise<ITodo[]>{
        return await Todo.find();
    }

    async create(title : string , tag : string[]): Promise<ITodo>{
        return await Todo.create({title,tag, completed : false});
    }


}

export default  TodoRepository;