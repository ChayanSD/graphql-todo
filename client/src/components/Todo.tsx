import { useMutation, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import React, { Key, useEffect, useState } from "react";
import { ADD_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/query";
import { GetTodosData, ITodo } from "../types/Todo";

const Todo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    //imidiatly update the ui then send the request to the server, if request fails then again update the ui
    optimisticResponse: {
      addTodo: {
        id: uuidv4(),
        title: title,
        completed: false,
        tag: tag.split(",").map((tg) => tg.trim()),
      },
    },
    //once the graphql call done what happens next , That is going to define in update function,
    update: (cache, { data: { addTodo } }) => {
      console.log(addTodo);

      const existingTodos = cache.readQuery<GetTodosData>({
        query: GET_TODOS,
      }) || { getTodos: [] };

      console.log(existingTodos);

      cache.writeQuery({
        query : GET_TODOS,
        data : {
          getTodos : [...existingTodos.getTodos, addTodo]
        }
      })

    },
  });


  const {data}= useQuery(GET_TODOS);

  useEffect(()=>{
    console.log("Todo response",data);
  },[data])


  function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    addTodo({
      variables: {
        title,
        tag: tag.split(",").map((tg) => tg.trim()),
      },
    });
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">GraphQL powered TODO</h1>
        <form onSubmit={handleAddTodo} className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              value={tag}
              placeholder="Tag"
              onChange={(e) => setTag(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Todo
          </button>
        </form>
  
        <ul className="space-y-4">
          {data?.getTodos?.map((todo: ITodo) => {
            return (
              <li key={todo.id as Key} className="p-4 bg-gray-100 rounded shadow">
                <h1 className="text-lg font-semibold text-gray-900">{todo.title}</h1>
                <p className="text-gray-600">{todo.tag}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </>
  
  );
};

export default Todo;
