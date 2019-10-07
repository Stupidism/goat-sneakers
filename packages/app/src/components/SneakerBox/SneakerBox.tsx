import _ from 'lodash';

import Price from '~/components/Price';

import { Sneaker } from '~/types/Sneaker';

const SneakerBox = ({ name, retail_price_cents, grid_picture_url } : Sneaker) => {
  return (
    <div>
      <img src={grid_picture_url} alt={name}/>
      {retail_price_cents && <Price amount={retail_price_cents} />}
      <div>{name}</div>
    </div>
  )
};

export default SneakerBox;
