import useSWR from 'swr';
import { useCurrencyStore } from '../stores/currency';

const fetcher = (...args) => {
  return fetch(...args).then((res) => {
    return res.json();
  });
};

export const useHotelData = () => {
  const { data, error } = useSWR(
    'https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo',
    fetcher,
  );

  return {
    hotelData: data,
    isLoadingHotelData: !error && !data,
    getHotelDataError: error,
  };
};

const getSource = (currency) => {
  return `http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/${currency}`;
};

export const useHotelListWithCurrency = () => {
  const currency = useCurrencyStore((state) => {
    return state.currency;
  });
  const url = getSource(currency);
  const { data, error } = useSWR(url, fetcher);

  return {
    hotelList: data,
    isLoadingHotelList: !error && !data,
    getHotelListError: error,
  };
};
