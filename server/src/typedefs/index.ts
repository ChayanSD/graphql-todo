import { gql } from "apollo-server";

const typedefs = gql`

    type Todo{
        id : ID!
        title : String!
        completed : Boolean!
        tags : [String]!
    }

    type Query{
        getTodos : [Todo]!
    }

`;

export default typedefs;