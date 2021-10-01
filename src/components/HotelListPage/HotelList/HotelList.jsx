import React, { useCallback } from 'react';
import S from './styles';
import { useHotelData, useHotelListWithCurrency } from '../../../apis';
import HotelCard from './HotelCard';

export default () => {
  const { hotelData, isLoadingHotelData, getHotelDataError } = useHotelData();
  const { hotelList, isLoadingHotelList, getHotelListError } = useHotelListWithCurrency();

  const renderHotelList = useCallback(() => {
    return hotelList.map(({ id, price }) => {
      const hotel = hotelData?.[id];

      return <HotelCard id={id} name={hotel?.name} price={price} />;
    });
  }, [hotelData, hotelList]);

  const isLoading = isLoadingHotelData || isLoadingHotelList;
  const isError = getHotelDataError || getHotelListError;

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <S.HotelListContainer>{renderHotelList()}</S.HotelListContainer>;
};
