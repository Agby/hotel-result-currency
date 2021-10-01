import React from 'react';
import S from './styles';

export default ({ id, price, name }) => {
  return (
    <S.HotelCard>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
    </S.HotelCard>
  );
};
