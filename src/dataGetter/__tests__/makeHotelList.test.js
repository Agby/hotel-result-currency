import { makeHotelList } from '../useGetHotelListData';
import mockHotelData from '../../apis/__mock__/mockHotelData';
import mockHotelWithCurrency from '../../apis/__mock__/mockHotelWithCurrency';

describe('makeHotelList', () => {
  it('Should work as expect ', () => {
    const result = makeHotelList({
      hotelData: mockHotelData,
      hotelWithCurrency: mockHotelWithCurrency,
    });

    expect(result).toEqual([
      {
        available: true,
        competitorPrice: false,
        ...mockHotelData[0],
        ...mockHotelWithCurrency[0],
      },
      {
        available: true,
        competitorPrice: false,
        ...mockHotelData[1],
        ...mockHotelWithCurrency[1],
      },
    ]);
  });
});
