import React, { useMemo } from 'react';
import S from './styles';
import { useCurrencyStore } from '../../stores/currency';

export default ({ value }) => {
  const currentCurrency = useCurrencyStore((state) => {
    return state.currency;
  });
  const pricing = useMemo(() => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currentCurrency,
    }).format(value);
  }, [value, currentCurrency]);

  return (
    <>
      <S.Pricing>{pricing}</S.Pricing>
    </>
  );
};
