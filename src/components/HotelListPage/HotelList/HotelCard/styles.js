import styled from 'styled-components';
import {
  lightgrey,
  white,
  warrior,
  darkred,
  good,
  okay,
  bad,
} from '../../../../utils/color';

export default {
  HotelCard: styled.div`
    position: relative;
    display: inline-block;
    min-width: 335px;
    max-width: 335px;
    height: 250px;
    min-height: 300px;
    max-height: 300px;
    margin: 15px;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 3px 3px 5px ${lightgrey};
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 3px 3px 5px #aaa;
      transform: translateX(2px) translateY(-2px);
      opacity: 1;
      transition: all 0.1s ease-in-out;
    }

    &.unavailable {
      cursor: default;
      opacity: 0.3;
    }

    &.unavailable:hover {
      box-shadow: 3px 3px 5px #aaa;
      transform: translateX(0px) translateY(0px);
      transition: none;
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
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    text-align: left;
  `,
  HotelName: styled.h3`
    position: relative;
    align-items: flex-end;
    margin: 0 5px;
  `,
  HotelStars: styled.p`
    position: absolute;
    bottom: -35px;
    left: 0px;
    color: ${darkred};
    font-weight: bloder;
    font-size: 15px;
  `,
  HotelRating: styled.h4`
    margin: 0 0 5px 0;
    padding: 2px 4px;
    color: ${white};
    border-radius: 3px;

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
  PricingField: styled.div`
    position: absolute;
    right: 10px;
    bottom: 20px;
  `,
  UnAvailabe: styled.h4`
    margin: 0 0 5px 0;
    color: ${warrior};
  `,
  TaxesField: styled.p`
    position: absolute;
    right: 10px;
    bottom: 0px;
    color: #aaa;
    font-size: 10px;

    &.taxes-included {
      color: ${darkred};
    }
  `,
};
