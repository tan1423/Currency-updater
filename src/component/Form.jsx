import React, {useId} from "react";

function Form({
  label,
  Amount,
  OnAmountChange,
  OnCurrencyChange,
  CurrencyOptions = [],
  SelectCurrency = "usd",
  amountDisabale = false,
  currencyDisable = false,
}) {
    const amountinputid = useId()
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex space-x-8">
      <div className="w-1/2 flex flex-col">
        <label htmlFor={amountinputid} className="text-gray-700 font-semibold mb-3">
          {label}
        </label>
        <input
          type="number"
          id={amountinputid}
          className="w-full outline-none py-3 px-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-shadow duration-300 ease-in-out"
          placeholder="Enter amount"
          disabled={amountDisabale}
          value={Amount}
          onChange={(e) =>
            OnAmountChange &&  OnAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-col">
        <label htmlFor="currency" className="text-gray-700 font-semibold mb-3">
          Currency Country
        </label>
        <select
          id="currency"
          className="cursor-pointer outline-none py-3 px-4 border border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-shadow duration-300 ease-in-out"
          value={SelectCurrency}
          disabled={currencyDisable}
          onChange={(e) => OnCurrencyChange && OnCurrencyChange(e.target.value)}
        >
          {CurrencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Form;
