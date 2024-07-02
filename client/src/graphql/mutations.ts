import { gql } from "@apollo/client";


export const ADD_TODO = gql`
    mutation AddingTodo($title : String! , $tag : [String]!){
        addTodo(title : $title , tag : $tag){
            id
            title
            completed
        }
    }
`;