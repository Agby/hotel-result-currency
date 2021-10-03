import { useHotelData, useHotelWithCurrency } from '../apis';

export const arrayToObj = (data, keyProp = 'id') => {
  return data.reduce((acc, datum) => {
    return { ...acc, [datum[keyProp]]: datum };
  }, {});
};

// get the most expensive pricing of competitors
export const getCompetitors = (competitors = undefined) => {
  let res = false;

  if (competitors) {
    Object.keys(competitors).forEach((key) => {
      if (competitors[key] > res) {
        res = competitors[key];
      }
    });
  }

  return res;
};

export const makeHotelList = ({ hotelWithCurrency, hotelData }) => {
  const formattedHotelData = arrayToObj(hotelData);
  const hotelList = [];

  hotelWithCurrency.forEach(({ competitors, ...item }) => {
    if (item.id in formattedHotelData) {
      hotelList.push({
        ...item,
        ...formattedHotelData[item.id],
        competitor: getCompetitors(competitors),
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
