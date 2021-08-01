export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    payload: {
        amountOfRUR: string,
        amountOfCurrency: string,
    }
};

export const ChangeCurrencyFieldAC = (amountOfRUR: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: {amountOfRUR, amountOfCurrency},
    };
};

export type ChangeAction = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    payload: {
        isBuying: boolean,
        amountOfRUR: '',
        amountOfCurrency: '',
    },
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: {
            isBuying,
            amountOfRUR: '',
            amountOfCurrency: '',
        },
    };
};

export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload: {
        currentCurrency: string,
        amountOfRUR: '',
        amountOfCurrency: '',
    }
};

export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: {
            currentCurrency,
            amountOfRUR: '',
            amountOfCurrency: '',
        }
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;