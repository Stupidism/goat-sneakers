import _ from 'lodash';
import Link from 'next/link';

import Price from '~/components/Price';

import { Sneaker } from '~/types/Sneaker';

import * as S from './style.SneakerBox';

const SneakerBox = ({ id, name, retail_price_cents, grid_picture_url } : Sneaker) => {
  return (
    <Link href="/sneakers/[sneaker-id]" as={`/sneakers/${id}`}>
      <S.SneakerBox>
        <S.RatioContainer>
          <img src={grid_picture_url} alt={name}/>
          <S.PriceWrapper>
            {retail_price_cents && <Price amount={retail_price_cents} />}
          </S.PriceWrapper>
          <S.Name>{name}</S.Name>
        </S.RatioContainer>
      </S.SneakerBox>
    </Link>
  )
};

export default SneakerBox;
