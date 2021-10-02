import React, { useCallback } from 'react';
import S from './styles';
import { useGetHotelListData } from '../../../hooks/useGetHotelListData';
import HotelCard from './HotelCard';

export default () => {
  const { isLoading, data, error } = useGetHotelListData();

  const renderHotelList = useCallback(() => {
    return data.map((hotel) => {
      return <HotelCard key={`card-${hotel.id}`} hotel={hotel} />;
    });
  }, [data]);

  // To fix the row's card position which not fulling up
  const renderEmptyCard = useCallback(() => {
    const windowWidth = window.innerWidth;
    const cardWidth = 375;
    const columnNum = Math.floor(windowWidth / cardWidth);
    const emptyCardNumber = columnNum - (data.length % columnNum);

    if (emptyCardNumber < columnNum && emptyCardNumber > 0) {
      return new Array(emptyCardNumber).fill(<S.EmptyCard />);
    }

    return null;
  }, [data.length]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <S.Spinner />;

  return (
    <S.HotelListContainer>
      {renderHotelList()}
      {renderEmptyCard()}
    </S.HotelListContainer>
  );
};
