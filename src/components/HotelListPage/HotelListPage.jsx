import React from 'react';
import S from './styles';

export default () => {
  console.log(navigator);

  return (
    <S.HotelListContainer>
      <div>{navigator}</div>
    </S.HotelListContainer>
  );
};
