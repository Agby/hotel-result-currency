import { arrayToObj } from '../useGetHotelListData';

describe('arrayToObj', () => {
  it('Should work as expect if input is empty array', () => {
    const input = [];
    const result = arrayToObj(input);

    expect(result).toEqual({});
  });

  it('Should work as expect if input is null', () => {
    const input = null;
    const result = arrayToObj(input);

    expect(result).toEqual({});
  });

  it('Should work as expect if input not nesty', () => {
    const input = [1, 2, 3, 4];
    const result = arrayToObj(input);

    // replace undefined key 3 times
    expect(result).toEqual({ undefined: 4 });
  });

  it('Should work as expect', () => {
    const input = [
      { id: 0, value: 'pie' },
      { id: 1, value: 'apple' },
    ];
    const result = arrayToObj(input);

    expect(result).toEqual({
      0: { id: 0, value: 'pie' },
      1: { id: 1, value: 'apple' },
    });
  });

  it('Should work as expect if pass keyProp', () => {
    const input = [
      { id: 0, value: 'pie' },
      { id: 1, value: 'apple' },
    ];
    const result = arrayToObj(input, 'value');

    expect(result).toEqual({
      pie: { id: 0, value: 'pie' },
      apple: { id: 1, value: 'apple' },
    });
  });

  it('Should work as expect if pass not exists keyProp', () => {
    const input = [
      { id: 0, value: 'pie' },
      { id: 1, value: 'apple' },
    ];
    const result = arrayToObj(input, 'foo');

    expect(result).toEqual({
      undefined: { id: 1, value: 'apple' },
    });
  });
});
