import styled, { css } from 'styled-components';
import { Flex, Box } from '@rebass/grid';

export const ShopAll = styled.div`
  font-size: 36px;
  text-align: center;
  
  padding: 80px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
    padding: 48px 0;
  }
`;

export const FilterPanel = styled(Flex)`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 10px;

  margin-bottom: 15px;

  select {
    max-width: 240px;
  }
`;

export const ShowFilters = styled.div`
  letter-spacing: 1px;
  font-weight: 400;

  :after {
    content: ">";
    margin-left: 10px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ShowingResults = styled.div`
  line-height: 15px;
  color: rgb(136, 136, 136);
`;

export const BorderFlex = styled(Flex)`
  border-width: 1px 0 0 1px;
  border-color: black;
  border-style: solid;
  position: relative;

  :before {
    content: "";
    position: absolute;

    border-width: 0 1px 1px 0;
    border-color: black;
    border-style: solid;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.sm}) {
      margin: 0 -1px;
      border-color: hsla(0,0%,50.6%,.6);
    }
  `}
`;

export const BorderBox = styled(Box)`
  border-width: 0 1px 1px 0;
  border-color: hsla(0,0%,50.6%,.6);
  border-style: solid;
  position: relative;

  &:hover {
    border-color: black;

    :before {
      content: "";
      position: absolute;

      border-width: 1px 0 0 1px;
      border-color: black;
      border-style: solid;
      
      top: -1px;
      left: -1px;
      bottom: 0;
      right: 0;
    }
  }
`;

export const SeeMoreWrapper = styled.div`
  margin: 0 auto;

  border-width: 0 1px 1px;
  border-color: black;
  border-style: solid;
  width: 235px;
  height: 45px;

  font-size: 10px;
  text-align: center;
  line-height: 45px;
  text-transform: uppercase;
`;
