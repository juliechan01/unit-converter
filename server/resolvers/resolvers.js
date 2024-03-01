import axios from "axios";

const resolvers = {
    Query: {
        convertedResult: async (parent, { convertFrom, convertTo, amount }) => {
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
                // console.log(response.data);
                console.log(resultData.result);
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
