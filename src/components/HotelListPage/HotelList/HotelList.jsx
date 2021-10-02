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

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <S.HotelListContainer>{renderHotelList()}</S.HotelListContainer>;
};
