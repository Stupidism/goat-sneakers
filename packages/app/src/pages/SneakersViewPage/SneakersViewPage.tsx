import _ from 'lodash';
import useAxios from 'axios-hooks';

import { Sneaker } from '~/types/Sneaker';
import Price from '~/components/Price';
import PageLayout from '~/components/PageLayout';

import * as S from './style.SneakersViewPage';

type Props = {
  id: number,
}

const SneakersViewPage = ({ id } : Props) => {
  const [{ data: sneaker, loading }] = useAxios<Sneaker>({
    url: `/sneakers/${id}`,
  });

  console.log('data', sneaker);

  if (loading) return 'Loading...';

  if (!sneaker) return null;

  return (
    <PageLayout>
      <S.SneakerBanner>
        <S.LeftAvatarBox width={1/2}>
          <S.PictureList>
            <img src={sneaker.main_picture_url} alt={sneaker.name} />
            <img src={sneaker.grid_picture_url} alt={`Placeholder1_${sneaker.name}`} />
            <img src={sneaker.grid_picture_url} alt={`Placeholder2_${sneaker.name}`} />
          </S.PictureList>
          <S.SneakerOneLineInfo>
              {_.get(sneaker, 'brand_name', 'Nike')} / {_.get(sneaker, 'silhouette', 'Nike')} / {sneaker.name}
            </S.SneakerOneLineInfo>
        </S.LeftAvatarBox>
        <S.RightInfoBox width={1/2}>
          <h1>{sneaker.name}</h1>
          <p>SKU: {_.get(sneaker, 'sku', 'AA3832 100')}</p>
          <S.Actions>
            <S.BuyButton>BUY NEW - <Price amount={sneaker.retail_price_cents} /></S.BuyButton>  
            <S.BuyButton>BUY USED - <Price amount={Math.round(sneaker.retail_price_cents / 1.4)} /></S.BuyButton>  
          </S.Actions>
        </S.RightInfoBox> 
      </S.SneakerBanner>
      <br/>
      <br/>
      <div>
        Other Info Placeholder
      </div>
    </PageLayout>  
  );
};

export default SneakersViewPage;
