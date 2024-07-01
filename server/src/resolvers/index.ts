import TodoRepository from "../repository/todoRepository";
import TodoService from "../services/todoService"

const todoService = new TodoService(new TodoRepository());

const resolvers = {
    Query : {
        getTodos : async ()=>{
            return await todoService.getAll();
        }
    },

    Mutation : {
        addTodo : async (_ : any , {title , tag}: {title : string , tag : string[]})=>{
            return await todoService.create(title, tag);
        }
    }
}

export default resolvers;