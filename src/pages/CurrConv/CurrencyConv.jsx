import InputBox from "../../components/Inputbox/InputBox";

function CurrencyConv() {
  return (
    <div>
      <InputBox label={"From"} />
      <button className="border">swap</button>
      <InputBox label={"To"} />
      <button className="border">Convert ____ to ____</button>
    </div>
  );
}

export default CurrencyConv;
