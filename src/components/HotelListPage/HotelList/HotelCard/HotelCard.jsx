import React, { useMemo } from 'react';
import Pricing from '../../../../elements/Pricing';
import S from './styles';

export default ({ hotel }) => {
  const {
    price, name, photo, rating, stars,
  } = hotel;

  const getRatingClass = useMemo(() => {
    if (rating > 8.9) return 'better';
    if (rating > 6.9) return 'okay';

    return 'bad';
  }, [rating]);

  return (
    <S.HotelCard>
      <S.CardImage src={photo} />
      <S.CardInfo>
        <S.HotelName>
          {name}
          <S.HotelStars>
            {stars}
            -star
          </S.HotelStars>
        </S.HotelName>
        <S.HotelRating className={getRatingClass}>{rating}</S.HotelRating>
      </S.CardInfo>
      <Pricing value={price} />
    </S.HotelCard>
  );
};
