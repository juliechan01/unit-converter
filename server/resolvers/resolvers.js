import axios from "axios";

const resolvers = {
    Query: {
        convertedResult: async (_, { convertFrom, convertTo, amount }) => {
            try {
                const response = await axios.get(
                    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
                    {
                        params: {
                            from: convertFrom,
                            to: convertTo,
                            amount,
                        },
                        headers: {
                            "X-RapidAPI-Key": process.env.API_KEY,
                            "X-RapidAPI-Host":
                                "currency-conversion-and-exchange-rates.p.rapidapi.com",
                        },
                    }
                );

                const resultData = response.data;
                const convertedAmount = parseFloat(resultData.result);
                console.log(resultData.query);

                return {
                    convertFrom: resultData.query.from,
                    convertTo: resultData.query.to,
                    amount: convertedAmount,
                };
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default resolvers;
