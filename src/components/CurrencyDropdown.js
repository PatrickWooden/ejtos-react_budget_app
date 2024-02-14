import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    useEffect(() => {
        setSelectedCurrency(currency);
    }, [currency]);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        setSelectedCurrency(selectedCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
        console.log("Sending new currency");
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="currency">Currency:</label>
            <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">Dollar</option>
                <option value="£">Pound</option>
                <option value="€">Euro</option>
                <option value="₹">Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;