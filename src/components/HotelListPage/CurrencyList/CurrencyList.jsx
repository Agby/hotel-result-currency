import React from 'react';
import S from './styles';
import { useCurrencyStore, currencyType } from '../../../stores/currency';

export default () => {
  const setCurrency = useCurrencyStore((state) => {
    return state.setCurrency;
  });
  const currentCurrency = useCurrencyStore((state) => {
    return state.currency;
  });

  const handleClick = (currency) => {
    setCurrency(currency);
    sessionStorage.setItem('currency', currency);
  };

  return (
    <S.HotelListContainer>
      {Object.keys(currencyType).map((currencyKey) => {
        const isActive = currentCurrency === currencyKey;

        return (
          <S.CurrencyButton
            key={currencyKey}
            className={isActive && 'active'}
            onClick={() => {
              return handleClick(currencyKey);
            }}
          >
            {currencyKey}
          </S.CurrencyButton>
        );
      })}
    </S.HotelListContainer>
  );
};
