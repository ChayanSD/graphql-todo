export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
    tag: string[];
}

export interface GetTodosData {
    getTodos: ITodo[];
}