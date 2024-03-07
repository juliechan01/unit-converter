import { gql } from "@apollo/client";

export const GET_CONVERTED_CURRENCY_DETAILS = gql`
    query getConvertedCurrencyDetails(
        $convertFrom: String!
        $convertTo: String!
        $amountIn: Float!
    ) {
        convertedResult(
            convertFrom: $convertFrom
            convertTo: $convertTo
            amountIn: $amountIn
        ) {
            convertFrom
            convertTo
            amountIn
            amountOut
        }
    }
`;
