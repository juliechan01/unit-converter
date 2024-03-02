const ConversionResult = ({ data }) => {
    return (
        <>
            {data ? (
                <>
                    {data.convertedResult.amountIn}{" "}
                    {data.convertedResult.convertFrom} equals{" "}
                    {data.convertedResult.amountOut}{" "}
                    {data.convertedResult.convertTo}
                </>
            ) : (
                <></>
            )}
        </>
    );
};
export default ConversionResult;
