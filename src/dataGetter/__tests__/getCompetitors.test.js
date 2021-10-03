import { getCompetitors } from '../useGetHotelListData';

describe('getCompetitors', () => {
  it('Should work as expect if no competitors', () => {
    const input = undefined;
    const result = getCompetitors(input);

    expect(result).toEqual(false);
  });

  it('Should work as expect if no competitors', () => {
    const input = {};
    const result = getCompetitors(input);

    expect(result).toEqual(false);
  });

  it('Should work as expect', () => {
    const input = { tim: 200 };
    const result = getCompetitors(input);

    expect(result).toEqual(200);
  });

  it('Should work as expect if has multiple competitors', () => {
    const input = { tim: 200, john: -10, foo: 'abc' };
    const result = getCompetitors(input);

    expect(result).toEqual(200);
  });
});
