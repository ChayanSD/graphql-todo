import ITodo from "../types/todoTypes";

class TodoRepository{

    todoModel : ITodo;

    constructor(todoModel : ITodo){
      this.todoModel = todoModel;
    }

    async getAll(){
        // return await this.todoModel.find();
    }
}