import { useHotelData, useHotelWithCurrency } from '../apis';

export const arrayToObj = (data, keyProp = 'id') => {
  return data.reduce((acc, datum) => {
    return { ...acc, [datum[keyProp]]: datum };
  }, {});
};

export const makeHotelList = ({ hotelWithCurrency, hotelData }) => {
  const formattedHotelData = arrayToObj(hotelData);
  const hotelList = [];

  hotelWithCurrency.forEach((item) => {
    if (item.id in formattedHotelData) {
      hotelList.push({
        ...item,
        ...formattedHotelData[item.id],
        available: true,
      });

      delete formattedHotelData[item.id];
    }
  });

  const unAvailableList = Object.keys(formattedHotelData).map((key) => {
    return { ...formattedHotelData[key], available: false };
  });

  return [...hotelList, ...unAvailableList];
};

export const useGetHotelListData = () => {
  const { hotelData, isLoadingHotelData, getHotelDataError } = useHotelData();
  const { hotelWithCurrency, isLoadingHotelList, getHotelListError } = useHotelWithCurrency();
  const isLoading = isLoadingHotelData || isLoadingHotelList;
  const error = getHotelDataError || getHotelListError;

  if (isLoading || error) {
    return {
      isLoading,
      data: [],
      error,
    };
  }

  const hotelList = makeHotelList({ hotelWithCurrency, hotelData });

  return {
    isLoading,
    data: hotelList,
    error: getHotelDataError || getHotelListError,
  };
};
