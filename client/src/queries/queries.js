import { gql } from "@apollo/client";

export const GET_CONVERTED_CURRENCY_DETAILS = gql`
    query getConvertedCurrencyDetails(
        $convertFrom: String!
        $convertTo: String!
        $amount: Float!
    ) {
        convertedResult(
            convertFrom: $convertFrom
            convertTo: $convertTo
            amount: $amount
        ) {
            convertFrom
            convertTo
            amount
        }
    }
`;
