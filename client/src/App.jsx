import CurrencyConverter from "./components/CurrencyConverter";

function App() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div>
                    <p>Converter</p>
                    <CurrencyConverter />
                </div>
            </div>
        </>
    );
}

export default App;
