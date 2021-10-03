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
    opacity: 0.8;

    &:hover {
      box-shadow: 3px 3px 5px #aaa;
      transform: translateX(2px) translateY(-2px);
      transition: all 0.1s ease-in-out;
      opacity: 1;
    }

    &.unavailable {
      opacity: 0.3;
      cursor: default;
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
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    padding: 10px;
  `,
  HotelName: styled.h3`
    position: relative;
    align-items: flex-end;
    margin: 0 5px;
  `,
  HotelStars: styled.p`
    position: absolute;
    left: 0px;
    bottom: -35px;
    font-size: 15px;
    color: ${darkred};
    font-weight: bloder;
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
    font-size: 10px;
    color: #aaa;

    &.taxes-included {
      color: ${darkred};
    }
  `,
};
