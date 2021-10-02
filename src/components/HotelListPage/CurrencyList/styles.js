import styled from 'styled-components';
import { white, warrior } from '../../../utils/color';

export default {
  HotelListContainer: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
  `,
  CurrencyButton: styled.button`
    width: 80px;
    height: 30px;
    margin: 5px;
    background: ${white};
    cursor: pointer;

    &.active {
      color: ${white};
      background: ${warrior};
    }
  `,
};
