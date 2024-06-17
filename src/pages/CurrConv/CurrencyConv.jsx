import { useState } from "react";
import InputBox from "../../components/Inputbox/InputBox";
import useCurrencyinfo from "../../Data/data";

function CurrencyConv() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convamount, setConvamount] = useState(0);

  const data = useCurrencyinfo(from);
  const options = Object.keys(data);

  function convert() {
    setConvamount(amount * data[to]);
  }

  function swap() {
    setAmount(convamount);
    setConvamount(amount);
    setFrom(to);
    setTo(from);
  }

  console.log(options);
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Currency Converter</h1>
      <div className="mb-6 w-full max-w-md">
        <InputBox
          label={"From"}
          value={amount}
          SelectedCurrency={from}
          onCurrencychange={(currency) => setFrom(currency)}
          onAmountchange={(amount) => setAmount(amount)}
          options={options}
        />
      </div>
      <button
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        onClick={swap}
      >
        Swap
      </button>
      <div className="mb-6 w-full max-w-md">
        <InputBox
          label={"To"}
          value={convamount}
          SelectedCurrency={to}
          onCurrencychange={(currency) => setTo(currency)}
          onAmountchange={(convamount) => setConvamount(convamount)}
          options={options}
        />
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700"
        onClick={convert}
      >
        Convert {from} to {to}
      </button>
    </div>
  );
}

export default CurrencyConv;
