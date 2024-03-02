import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_CONVERTED_CURRENCY_DETAILS } from "../queries/queries";
import CURRENCIES from "../symbols/currencySymbols";

const CurrencyConverter = () => {
    const [convertFrom, setConvertFrom] = useState("EUR");
    const [convertTo, setConvertTo] = useState("USD");
    const [inputAmount, setInputAmount] = useState(1);
    const [resultData, setResultData] = useState({});

    const [getConvertedCurrencyDetails, { loading, error, data }] =
        useLazyQuery(GET_CONVERTED_CURRENCY_DETAILS, {
            // To assign value to setResultData() once it complete querying
            onCompleted: (data) => {
                setResultData(data);
            },
        });

    if (loading) {
        return <p>Loading........</p>;
    }
    if (error) {
        console.log(error);
        return (
            <p>
                Something went wron along the way.... SORRY for the
                unconvenience
            </p>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        getConvertedCurrencyDetails({
            variables: {
                convertFrom,
                convertTo,
                amountIn: parseFloat(inputAmount),
            },
        });
    };

    console.log(resultData);
    return (
        <>
            <form
                className="flex flex-row gap-2 items-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                />
                <select
                    value={convertFrom}
                    onChange={(e) => setConvertFrom(e.target.value)}
                >
                    {CURRENCIES.map((symbol) => (
                        <option key={symbol.symbol} value={symbol.symbol}>
                            {symbol.symbol}
                        </option>
                    ))}
                </select>
                <p>to</p>
                <select
                    value={convertTo}
                    onChange={(e) => setConvertTo(e.target.value)}
                >
                    {CURRENCIES.map((symbol) => (
                        <option key={symbol.symbol} value={symbol.symbol}>
                            {symbol.symbol}
                        </option>
                    ))}
                </select>
                <button
                    className="bg-slate-400 font-medium text-slate-50 px-3 py-2 rounded-md"
                    type="submit"
                >
                    Convert
                </button>
            </form>
            {data ? (
                <>
                    {data.convertedResult.amountIn} {convertFrom} equals{" "}
                    {data.convertedResult.amountOut} {convertTo}
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default CurrencyConverter;
