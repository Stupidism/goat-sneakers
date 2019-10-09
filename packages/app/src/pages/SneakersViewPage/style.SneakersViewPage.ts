import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

const border = '1px solid black';

export const SneakerBanner = styled(Flex)`
  height: calc(100vh - 180px);
  min-height: 500px;
  max-height: 700px;
  border: ${border};
`;

export const LeftAvatarBox = styled(Box)`
  position: relative;
  border-right: ${border};
`;

export const PictureList = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 400px);

  img {
    display: block;
    width: 65%;
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
  }
`;

export const SneakerOneLineInfo = styled.div`
  position: absolute;
  bottom: 10px;

  width: 100%;
  text-align: center;
`;

export const RightInfoBox = styled(Box)`
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  & > h1 {
    font-size: 26px;
    font-weight: normal;
  }

  & > p {
    font-size: 10px;
    color: rgb(119, 119, 119);
  }
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  border-top: ${border};

  display: flex;
`;

export const BuyButton =styled.div`
  flex: 1;
  height: 45px;
  line-height: 45px;
  font-size: 10px;

  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:not(:first-child) {
    border-left: ${border};
  }
`
