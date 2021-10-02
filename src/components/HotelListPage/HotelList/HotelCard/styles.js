import styled from 'styled-components';
import {
  lightgrey,
  white,
  darkred,
  good,
  okay,
  bad,
} from '../../../../utils/color';

export default {
  HotelCard: styled.div`
    display: inline-block;
    position: relative;
    margin: 15px;
    height: 250px;
    min-width: 335px;
    max-width: 335px;
    min-height: 300px;
    max-height: 300px;
    box-shadow: 3px 3px 5px ${lightgrey};
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;

    &:hover {
      box-shadow: 3px 3px 5px #aaa;
      transform: translateX(2px) translateY(-2px);
      transition: all 0.1s ease-in-out;
      opacity: 0.9;
    }
  `,
  CardImage: styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
  `,
  CardInfo: styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    padding: 10px;
  `,
  HotelName: styled.h3`
    position: relative;
    align-items: flex-end;
    margin: 0 0 5px 0;
  `,
  HotelStars: styled.p`
    position: absolute;
    left: 0px;
    bottom: -35px;
    font-size: 15px;
    color: ${darkred};
    font-weight: bloder;
    break-word: no-break;
  `,
  HotelRating: styled.h4`
    margin: 0 0 5px 0;
    padding: 2px 4px;
    border-radius: 3px;
    color: ${white};

    &.better {
      background: ${good};
    }

    &.okay {
      background: ${okay};
    }

    &.bad {
      background: ${bad};
    }
  `,
};
