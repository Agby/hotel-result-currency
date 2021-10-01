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
  };

  return (
    <S.HotelListContainer>
      <div>{currentCurrency}</div>
      {Object.keys(currencyType).map((currencyKey) => {
        return (
          <S.CurrencyButton
            key={currencyKey}
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
