import React, { useMemo } from 'react';
import Pricing from '../../../../elements/Pricing';
import S from './styles';

export default ({ available, hotel }) => {
  const {
    price, name, photo, rating, stars, competitor,
  } = hotel;

  const getRatingClass = useMemo(() => {
    if (rating > 8.9) return 'better';
    if (rating > 6.9) return 'okay';

    return 'bad';
  }, [rating]);

  const renderPricing = () => {
    if (available) return <Pricing value={price} originValue={competitor} />;

    return <S.UnAvailabe>Rates unavailable</S.UnAvailabe>;
  };
  const taxesIncluded = 'taxes_and_fees' in hotel;

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
      {available && (
        <S.TaxesField className={taxesIncluded && 'taxes-included'}>
          {taxesIncluded ? 'taxed & fees included' : 'excluding taxes & fees'}
        </S.TaxesField>
      )}
    </S.HotelCard>
  );
};
