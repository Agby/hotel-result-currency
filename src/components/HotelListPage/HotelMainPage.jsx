import React from 'react';
import S from './styles';
import HotelList from './HotelList';
import CurrencyList from './CurrencyList';

export default () => {
  return (
    <S.HotelMainPageContainer>
      <CurrencyList />
      <HotelList />
    </S.HotelMainPageContainer>
  );
};
