import React, { useMemo } from 'react';
import S from './styles';
import { useCurrencyStore, currencyType } from '../../stores/currency';

const currencyCustomDisplay = {
  [currencyType.USD]: (price) => {
    return Math.round(price);
  },
  [currencyType.SGD]: (price) => {
    return Math.round(price);
  },
  [currencyType.CNY]: (price) => {
    return Math.round(price);
  },
  [currencyType.KRW]: (price) => {
    return Math.round(price / 100) * 100;
  },
};

export default ({ value }) => {
  const currentCurrency = useCurrencyStore((state) => {
    return state.currency;
  });

  const pricing = useMemo(() => {
    if (currentCurrency in currencyCustomDisplay) {
      return currencyCustomDisplay[currentCurrency](value);
    }

    return value;
  }, [value, currentCurrency]);

  const formattedPricing = useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currentCurrency,
      minimumSignificantDigits: 1,
    }).format(pricing);
  }, [pricing]);

  return (
    <>
      <S.Pricing>{formattedPricing}</S.Pricing>
    </>
  );
};
