import _ from 'lodash';

import SneakerBox from '~/components/SneakerBox';
import PageLayout from '~/components/PageLayout';

import useSneakersListPage from './useSneakersListPage';
import { sortOptionDesciptions } from './constants.SneakersListPage';

import * as S from './style.SneakersListPage';

const SneakersListPage = () => {
  const [{ totalCount, sortBy, sneakers, loading }, { onSortByChange, onSeeMore }] = useSneakersListPage();

  return (
    <PageLayout>
      <S.ShopAll>Shop All</S.ShopAll>
      <S.FilterPanel flexDirection={['column', 'column', 'row']}>
        <S.ShowFilters>SHOW FILTERS</S.ShowFilters>

        <S.ShowingResults>
          SHOWING {totalCount > 100000 ? '100000+' : totalCount} RESULTS
        </S.ShowingResults>
        
        <select data-testid="sort-by-select" value={sortBy} onChange={onSortByChange}>
          {_.map(sortOptionDesciptions, (description, key) => (
            <option value={key} key={key}>{description}</option>
          ))}
        </select>
      </S.FilterPanel>
      {sneakers && (
        <>
          <S.BorderFlex flexWrap="wrap">
            {sneakers.map(sneaker => (
              <S.BorderBox 
                width={[
                  1/2,
                  1/3,
                  1/2,
                  1/3,
                  1/4
                ]} 
                px={22}
                pt={15}
                pb={20}
                key={sneaker.id}
              >
                <SneakerBox {...sneaker} />
              </S.BorderBox>
            ))}
          </S.BorderFlex>
          <S.SeeMoreWrapper onClick={loading ? undefined : onSeeMore}>
            {loading ? 'Loading...' : 'SEE MORE'}
          </S.SeeMoreWrapper>
        </>
      )}
    </PageLayout> 
  );
};

export default SneakersListPage;
