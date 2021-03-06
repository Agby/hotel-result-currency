import styled from 'styled-components';
import { red } from '../../utils/color';

export default {
  PricingWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Pricing: styled.h3`
    margin: 0 0 5px 0;

    &.highlight {
      color: ${red};
    }
  `,
  OriginValue: styled.p`
    margin: 0px;
    margin-right: 5px;
    font-size: 10px;
    text-decoration: line-through;
    opacity: 0.8;
  `,
};
