import styled from 'styled-components';
import device from '../../utils/mediaQueries';
import { white } from '../../utils/color';

export default {
  HotelListContainer: styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background: ${white};

    @media ${device.isMobile} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `,
};
