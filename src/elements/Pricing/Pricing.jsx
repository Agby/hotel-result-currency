import React, { useMemo } from 'react';
import S from './styles';
import { useCurrencyStore } from '../../stores/currency';

export default ({ value }) => {
  const currentCurrency = useCurrencyStore((state) => {
    return state.currency;
  });
  const pricing = useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currentCurrency,
      minimumSignificantDigits: 2,
    }).format(value);
  }, [value, currentCurrency]);

  return (
    <>
      <S.Pricing>{pricing}</S.Pricing>
    </>
  );
};
