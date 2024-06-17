import useCurrencyinfo from "../../Data/data";

function InputBox({
  label,
  options,
  currency,
  onCurrencychange,
  SelectedCurrency,
  onAmountchange,
  value,
}) {
  console.log(options);

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
      <label className="mb-2 text-lg font-medium">{label}</label>
      <input
        value={value}
        className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        onChange={(e) => {
          onAmountchange && onAmountchange(e.target.value);
        }}
      />
      <label className="mb-2 text-lg font-medium">Currency type</label>
      <select
        value={SelectedCurrency}
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          onCurrencychange && onCurrencychange(e.target.value);
        }}
      >
        {options.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
