import useCurrencyinfo from "../../Data/data";

function InputBox({
  label,
  options,
  currency,
  onCurrencyChange,
  SelectedCurrency,
}) {
  console.log(options);

  return (
    <>
      <div>
        <label>{label}</label>
        <input className="border" type="number" />
        <label>Currency type</label>

        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {options.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default InputBox;
