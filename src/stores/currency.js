import produce from 'immer';
import create from 'zustand';

export const currencyType = {
  USD: 'USD',
  SGD: 'SGD',
  CNY: 'CNY',
  KRW: 'KRW',
};

export const useCurrencyStore = create((set) => {
  const initCurrency = sessionStorage.getItem('currency') || 'USD';

  return {
    currency: initCurrency,
    setCurrency: (currency) => {
      return set(
        produce((state) => {
          state.currency = currency;
        }),
      );
    },
  };
});
