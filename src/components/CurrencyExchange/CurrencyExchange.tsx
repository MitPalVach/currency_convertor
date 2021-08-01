import React from 'react';

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfRUR: string;
    amountOfCurrency: string;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const CurrencyExchange: React.FC<CurrencyExchangePropsType> = ({
                                                                   currenciesName,
                                                                   currentCurrency,
                                                                   currencyRate,
                                                                   isBuying,
                                                                   amountOfRUR,
                                                                   amountOfCurrency,
                                                                   changeCurrencyField,
                                                                   changeAction,
                                                                   changeCurrentCurrency,
                                                               }) => {
    const viewCurrency = isBuying ? (
        <>
            <label>
                Введите сумму RUR:
                <input value={amountOfRUR} data-currency="rur" onChange={changeCurrencyField}/>
            </label>
            <label>
                Вы получите {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
        </>
    ) : (
        <>
            <label>
                Введите сумму {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
            <label>
                Вы получите RUR:
                <input value={amountOfRUR} data-currency="rur" onChange={changeCurrencyField}/>
            </label>
        </>
    );

    return (
        <div className="currency">
            <h2>Конвертор валют</h2>
            <div className="currency-names">
                <p>Выберите валюту: </p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (
                            <li
                                key={`${index}-${currency}`}
                                className={`currencies ${currentCurrency === currency ? 'activeCurrency' : null}`}
                                onClick={changeCurrentCurrency}
                                data-currency={currency}
                            >
                                {currency}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="currency-action">
        <span className={isBuying ? 'active' : ''} data-action="buy" onClick={changeAction}>
          Купить
        </span>
                <span className={isBuying ? '' : 'active'} data-action="sell" onClick={changeAction}>
          Продать
        </span>
            </div>
            <div className="fields">
                <p>Текущий курс: {currencyRate}</p>
                {viewCurrency}
            </div>
        </div>
    );
};

export default CurrencyExchange;
