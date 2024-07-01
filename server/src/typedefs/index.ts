import { gql } from "apollo-server";

const typedefs = gql`

    type Todo{
        id : ID!
        title : String!
        completed : Boolean!
        tag : [String]!
    }

    type Query{
        getTodos : [Todo]!
    }

    type Mutation {
        addTodo(title : String! , tag : [String]!) : Todo!
    }

`;

export default typedefs;