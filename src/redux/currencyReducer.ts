import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfRUR: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 73.62,
            sellRate: 72.48,
        },
        {
            currencyName: 'EUR',
            buyRate: 86.52,
            sellRate: 85.16,
        },
        {
            currencyName: 'GBP',
            buyRate: 102.45,
            sellRate: 101.03,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfRUR: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};
