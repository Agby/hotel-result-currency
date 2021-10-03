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

  it('Should show unavailable hotel if no match hotel in the hotelData', () => {
    const customHotelData = [
      ...mockHotelData,
      {
        id: 3,
        name: 'SS Hotel',
      },
    ];

    const customHotelWithCurrency = [...mockHotelWithCurrency];
    const result = makeHotelList({
      hotelData: customHotelData,
      hotelWithCurrency: customHotelWithCurrency,
    });

    expect(result).toEqual([
      {
        available: true,
        competitorPrice: false,
        competitors: undefined,
        ...customHotelData[0],
        ...customHotelWithCurrency[0],
      },
      {
        available: true,
        competitorPrice: false,
        competitors: undefined,
        ...customHotelData[1],
        ...customHotelWithCurrency[1],
      },
      {
        id: 3,
        available: false,
        name: 'SS Hotel',
      },
    ]);
  });

  it('Should not show the hotel if no match hotel in the hotelData', () => {
    const customHotelData = [...mockHotelData];

    const customHotelWithCurrency = [
      ...mockHotelData,
      {
        id: 3,
        price: 1150,
        competitors: {
          Expedia: 190,
          foo: 30,
        },
        taxes_and_fees: {
          tax: 92,
          hotel_fees: 115,
        },
      },
    ];
    const result = makeHotelList({
      hotelData: customHotelData,
      hotelWithCurrency: customHotelWithCurrency,
    });

    expect(result).toEqual([
      {
        available: true,
        competitorPrice: false,
        competitors: undefined,
        ...customHotelData[0],
        ...customHotelWithCurrency[0],
      },
      {
        available: true,
        competitorPrice: false,
        competitors: undefined,
        ...customHotelData[1],
        ...customHotelWithCurrency[1],
      },
    ]);
  });
});
