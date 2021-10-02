import { useHotelData, useHotelListWithCurrency } from '../apis';

export const arrayToObj = (data, keyProp = 'id') => {
  return data.reduce((acc, datum) => {
    return { ...acc, [datum[keyProp]]: datum };
  }, {});
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

  const formattedHotelData = arrayToObj(hotelData);
  const result = hotelList.map((item) => {
    return {
      ...item,
      ...formattedHotelData[item.id],
    };
  });

  return {
    isLoading,
    data: result,
    error: getHotelDataError || getHotelListError,
  };
};
