import { useHotelData, useHotelListWithCurrency } from '../apis';

export const arrayToObj = (data, keyProp = 'id') => {
  return data.reduce((acc, datum) => {
    return { ...acc, [datum[keyProp]]: datum };
  }, {});
};

export const makeHotelList = ({ hotelList, hotelData }) => {
  const formattedHotelData = arrayToObj(hotelData);

  return hotelList.map((item) => {
    return {
      ...item,
      ...formattedHotelData[item.id],
    };
  });
};

export const useGetHotelListData = () => {
  const { hotelData, isLoadingHotelData, getHotelDataError } = useHotelData();
  const { hotelList, isLoadingHotelList, getHotelListError } = useHotelListWithCurrency();
  const isLoading = isLoadingHotelData || isLoadingHotelList;
  const error = getHotelDataError || getHotelListError;

  if (isLoading || error) {
    return {
      isLoading,
      data: [],
      error,
    };
  }

  const result = makeHotelList({ hotelList, hotelData });

  return {
    isLoading,
    data: result,
    error: getHotelDataError || getHotelListError,
  };
};
