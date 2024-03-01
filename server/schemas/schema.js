import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        convertedResult(
            convertFrom: String!
            convertTo: String!
            amount: Float!
        ): Result
    }

    type Result {
        convertFrom: String!
        convertTo: String!
        amount: Float!
    }
`;

export default typeDefs;
