import { useState } from "react";
import useCurrency from "./hooks/usecuerrenct";
import Form from "./component/Form";

function App() {
  const [amount, setAmount] = useState("1");
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [ConvertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrency(From);
  const tocurrencyInfo = useCurrency(To)
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(To);
    setTo(From);
    setAmount(ConvertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[To]);
  };

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md  mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Form
                  label="From"
                  Amount={amount}
                  CurrencyOptions={options}
                  SelectCurrency={From}
                  OnCurrencyChange={(currency) => setFrom(currency)}
                  OnAmountChange={(amount) => setAmount(amount || "")}
                />
              </div>
              <div className="relative ">
                <button
                  type="button"
                  className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 swap-button bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div>
                <Form
                  label="To"
                  Amount={ConvertedAmount}
                  CurrencyOptions={options}
                  SelectCurrency={To}
                  OnCurrencyChange={(currenct) => setTo(currenct)}
                  amountDisabale
                  
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-2"
              >
                Convert {From.toUpperCase()} to {To.toUpperCase()}
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-2"
                onClick={(e)=>{
                  e.preventDefault()
                  setAmount("")
                  setConvertedAmount("")
                  setFrom("usd")
                  setTo("inr")
                }}  

              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
