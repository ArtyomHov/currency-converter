import React from 'react'

export default function CurrencyRow(props) {
    const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props
    console.log(currencyOptions)
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}></input>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map((option) => {
                return (<option key={option} value={option}>{option}</option>)
            })}
            </select>
        </div>
    )
}
