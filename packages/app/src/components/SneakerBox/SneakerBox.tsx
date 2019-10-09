import _ from 'lodash';
import Link from 'next/link';

import Price from '~/components/Price';

import { Sneaker } from '~/types/Sneaker';

const SneakerBox = ({ id, name, retail_price_cents, grid_picture_url } : Sneaker) => {
  return (
    <Link href="/sneakers/[sneaker-id]" as={`/sneakers/${id}`}>
      <div>
        <img src={grid_picture_url} alt={name}/>
        {retail_price_cents && <Price amount={retail_price_cents} />}
        <div>{name}</div>
      </div>
    </Link>
  )
};

export default SneakerBox;
