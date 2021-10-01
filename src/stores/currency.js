import produce from 'immer';
import create from 'zustand';

export const currencyType = {
  USD: 'USD',
  SGD: 'SGD',
  CNY: 'CNY',
  KRW: 'KRW',
};

export const useCurrencyStore = create((set) => {
  return {
    currency: currencyType.USD,
    setCurrency: (currency) => {
      return set(
        produce((state) => {
          state.currency = currency;
        }),
      );
    },
  };
});
