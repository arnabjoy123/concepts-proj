import { useState } from "react";
import InputBox from "../../components/Inputbox/InputBox";
import useCurrencyinfo from "../../Data/data";

function CurrencyConv() {
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convamount, setConvamount] = useState(null);

  const data = useCurrencyinfo(from);
  const options = Object.keys(data);

  console.log(options);
  return (
    <div>
      <InputBox
        label={"From"}
        value={amount}
        SelectedCurrency={from}
        onCurrencychange={(currency) => setFrom(currency)}
        onAmountchange={() => setAmount(amount)}
        options={options}
      />
      <button className="border">swap</button>
      <InputBox
        label={"To"}
        value={convamount}
        SelectedCurrency={to}
        onCurrencychange={(currency) => setTo(currency)}
        onAmountchange={() => setConvamount(convamount)}
        options={options}
      />
      <button className="border">
        Convert {from} to {to}
      </button>
    </div>
  );
}

export default CurrencyConv;
