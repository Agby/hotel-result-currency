import React, { useMemo } from 'react';
import Pricing from '../../../../elements/Pricing';
import S from './styles';

export default ({ available, hotel }) => {
  const {
    price, name, photo, rating, stars,
  } = hotel;

  const getRatingClass = useMemo(() => {
    if (rating > 8.9) return 'better';
    if (rating > 6.9) return 'okay';

    return 'bad';
  }, [rating]);

  const renderPricing = () => {
    if (available) return <Pricing value={price} />;

    return <S.UnAvailabe>Rates unavailable</S.UnAvailabe>;
  };

  return (
    <S.HotelCard className={!available && 'unavailable'}>
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
      <S.PricingField>{renderPricing()}</S.PricingField>
    </S.HotelCard>
  );
};
