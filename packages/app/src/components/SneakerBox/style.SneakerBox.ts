import styled from 'styled-components';

export const SneakerBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;

  img {
    width: 55%;

    align-self: center;
    max-width: 55%;
    max-height: 55%;

    margin: 0 auto;
  }
`;

export const RatioContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  position: absolute;
  bottom: 0;

  text-align: center;
`;

export const PriceWrapper = styled.div`
  position: absolute;

  top: 0;
  right: 0;
`;
