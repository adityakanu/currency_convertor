import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "usd",
    currencyOptions = [],
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="inline-block mb-2 text-black/40">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 border-2 rounded-sm px-2"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                />
            </div>
            <div className="flex flex-wrap justify-end w-1/2 text-right">
                <p className="w-full mb-2 text-black/40">Currency Type</p>
                <select
                    className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                    value={selectCurrency}
                    onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
