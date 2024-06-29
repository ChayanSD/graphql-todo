import TodoRepository from "../repository/todoRepository";

class TodoService {
    todoRepository : TodoRepository;;
    constructor(todoRepository : TodoRepository){
        this.todoRepository = todoRepository;
    }

    async getAll(){
        return await this.todoRepository.getAll();
    }

    async create(title : string , tag : string[]){
        return await this.todoRepository.create(title,tag);
    }
}

export default TodoService;