import React, { useMemo, useCallback } from 'react';
import S from './styles';
import { useCurrencyStore, currencyType } from '../../stores/currency';

const currencyConfig = {
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

export default ({ value, originValue }) => {
  const currentCurrency = useCurrencyStore((state) => {
    return state.currency;
  });

  // Hotel prices in the results page are typically rounded by different country
  const pricing = useMemo(() => {
    if (currentCurrency in currencyConfig) {
      return currencyConfig[currentCurrency](value);
    }

    return value;
  }, [value, currentCurrency]);

  const originPricing = useMemo(() => {
    if (currentCurrency in currencyConfig) {
      return currencyConfig[currentCurrency](originValue);
    }

    return originValue;
  }, [originValue, currentCurrency]);

  const formattedNumber = useCallback((price) => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currentCurrency,
      minimumSignificantDigits: 1,
    }).format(price);
  });

  const formattedPricing = useMemo(() => {
    return formattedNumber(pricing);
  }, [pricing, currentCurrency]);

  const formattedOriginPricing = useMemo(() => {
    return formattedNumber(originPricing);
  }, [originPricing, currentCurrency]);

  const shouldShowOriginValue = formattedOriginPricing > formattedPricing;

  return (
    <S.PricingWrapper>
      {shouldShowOriginValue && (
        <S.OriginValue>{formattedOriginPricing}</S.OriginValue>
      )}
      <S.Pricing className={shouldShowOriginValue && 'highlight'}>
        {formattedPricing}
      </S.Pricing>
    </S.PricingWrapper>
  );
};
