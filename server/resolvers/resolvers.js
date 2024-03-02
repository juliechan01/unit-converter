import axios from "axios";

const resolvers = {
    Query: {
        convertedResult: async (_, { convertFrom, convertTo, amountIn }) => {
            try {
                const response = await axios.get(
                    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
                    {
                        params: {
                            from: convertFrom,
                            to: convertTo,
                            amount: amountIn,
                        },
                        headers: {
                            "X-RapidAPI-Key": process.env.API_KEY,
                            "X-RapidAPI-Host":
                                "currency-conversion-and-exchange-rates.p.rapidapi.com",
                        },
                    }
                );

                const resultData = response.data;
                const returnedAmountIn = parseFloat(resultData.query.amount);
                const convertedAmount = parseFloat(resultData.result);

                return {
                    convertFrom: resultData.query.from,
                    convertTo: resultData.query.to,
                    amountIn: returnedAmountIn, // the purpose of using this instead of the original amountIn is that the rendered vlue would not change each time user input new value but not select Convert
                    amountOut: convertedAmount,
                };
            } catch (error) {
                console.log("REsolvers Error", error);
            }
        },
    },
};

export default resolvers;
