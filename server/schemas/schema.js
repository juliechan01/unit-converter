import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        convertedResult(
            convertFrom: String!
            convertTo: String!
            amountIn: Float!
        ): Result
    }

    type Result {
        convertFrom: String!
        convertTo: String!
        amountIn: Float!
        amountOut: Float!
    }
`;

export default typeDefs;
