import _ from 'lodash';

import SneakerBox from '~/components/SneakerBox';

import useSneakersListPage from './useSneakersListPage';
import { sortOptionDesciptions } from './constants.SneakersListPage';

const SneakersListPage = () => {
  const [{ totalCount, sortBy, sneakers, loading }, { onSortByChange, onSeeMore }] = useSneakersListPage();

  return (
    <div>
      <h1>SHOP ALL</h1>
      <div>
        <span>SHOWING {totalCount > 100000 ? '100000+' : totalCount} RESULTS</span>
        
        <span>SORT BY: {sortOptionDesciptions[sortBy]}</span>
        <select data-testid="sort-by-select" value={sortBy} onChange={onSortByChange}>
          {_.map(sortOptionDesciptions, (description, key) => (
            <option value={key} key={key}>{description}</option>
          ))}
        </select>
      </div>
      {sneakers && (
        <>
          <div>
            {sneakers.map(sneaker => <SneakerBox key={sneaker.id} {...sneaker} />)}
          </div>
          {loading ? <div>Loading...</div> : <button onClick={onSeeMore}>SEE MORE</button>  }
        </>
      )}
    </div> 
  );
};

export default SneakersListPage;
