import * as React from 'react';
import _ from 'lodash';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import * as routerExports from 'next/router';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import SneakersListPage from '../SneakersListPage';

let mockRouter: {
  push: Function,
  query?: {
    sortBy: string,
  },
};

jest.spyOn(routerExports, 'useRouter');

routerExports.useRouter.mockImplementation(() => mockRouter);

const axiosMock = new MockAdapter(axios);

const mockShoes = [
  {
    "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/012/910/690/original/554724_065.png.png",
    "id": 397517,
    "name": "Air Jordan 1 Mid 'Multicolor Swoosh Black'",
    "release_date_unix": null,
    "retail_price_cents": 11000,
  },
  {
    "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/015/567/335/original/CM100018M.png.png",
    "id": 468155,
    "name": "Rally Pro 'Black'",
    "release_date_unix": null,
    "retail_price_cents": 10000,
  },
  {
    "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/009/249/006/original/259509_00.png.png",
    "id": 259509,
    "name": "Gucci Pursuit '72 Rubber Slide 'Black'",
    "release_date_unix": null,
    "retail_price_cents": 21000,
  },
];

const mockNextPageShoes = [
  { ...mockShoes[0], id: 233 },
  { ...mockShoes[1], id: 223 },
  { ...mockShoes[2], id: 222 },
]

const mockPriceLowToHighShoes = [
  mockShoes[1],
  mockShoes[0],
  mockShoes[2],
];

const defaultMockHeaders = {
  'x-total-count': 80,
};
let mockHeaders = defaultMockHeaders;

axiosMock.onGet('/sneakers', {
  params: {
    _limit: 20,
    _start: 0,
  }
}).reply(() => [200, JSON.stringify(mockShoes), mockHeaders]);

axiosMock.onGet('/sneakers', {
  params: {
    _limit: 20,
    _start: 3,
  }
}).reply(200, JSON.stringify(mockNextPageShoes), defaultMockHeaders);

axiosMock.onGet('/sneakers', {
  params: {
    _limit: 20,
    _start: 0,
    _sort: 'retail_price_cents', 
    _order: 'asc', 
    retail_price_cents_ne: 'null',
  }
}).reply(200, JSON.stringify(mockPriceLowToHighShoes), defaultMockHeaders);

describe('<SneakersListPage/>', () => {
  beforeEach(() => {
    mockHeaders = defaultMockHeaders;
    mockRouter = {
      push: jest.fn(),
    };
  });

  it('should show all the shoes returned', async () => {
    const { getByText, getAllByTestId } = render(<SneakersListPage />);

    expect(getByText('SHOP ALL')).not.toBeNull();
    expect(getByText('SORT BY: POPULAR')).not.toBeNull();
    expect(getByText('SHOWING 0 RESULTS')).not.toBeNull();
    await waitForElement(() => getByText("Air Jordan 1 Mid 'Multicolor Swoosh Black'"));
    expect(getByText('$110')).not.toBeNull();
    expect(getAllByTestId('price')).toHaveLength(3);
    expect(_.map(getAllByTestId('price'), 'textContent')).toEqual([
      '$110',
      '$100',
      '$210',
    ]);
  });

  it('should show 100000+ results if count is larger than 100000', async () => {
    mockHeaders['x-total-count'] = 100001;
    const { getByText } = render(<SneakersListPage />);

    expect(getByText('SHOWING 0 RESULTS')).not.toBeNull();
    await waitForElement(() => getByText('SHOWING 100000+ RESULTS'));
  });

  it('should load more data after "SEE MORE" is clicked', async () => {
    const { getByText, queryByText, getAllByTestId } = render(<SneakersListPage />);
    await waitForElement(() => getByText('SEE MORE'));
    fireEvent.click(getByText('SEE MORE'));
    expect(getByText('Loading...')).not.toBeNull();
    expect(queryByText('SEE MORE')).toBeNull();
    expect(getAllByTestId('price')).toHaveLength(3);
    await waitForElement(() => getByText('SEE MORE'));
    expect(getAllByTestId('price')).toHaveLength(6);
  });

  it('should change display order after sortBy changed', async () => {
    const { getByText, getByTestId, getAllByTestId, rerender } = render(<SneakersListPage />);
    await waitForElement(() => getByText("Air Jordan 1 Mid 'Multicolor Swoosh Black'"));
    
    fireEvent.change(getByTestId('sort-by-select'), { target: { value: 'PRICE_LOW_HIGH' } })

    expect(mockRouter.push).toHaveBeenCalledWith("/?sortBy=PRICE_LOW_HIGH", "/?sortBy=PRICE_LOW_HIGH", {"shallow": true});

    mockRouter.query = {
      sortBy: 'PRICE_LOW_HIGH',
    };

    rerender(<SneakersListPage />);
    expect(getByText('Loading...')).not.toBeNull();
    await waitForElement(() => getByText('SEE MORE'));

    expect(_.map(getAllByTestId('price'), 'textContent')).toEqual([
      '$100',
      '$110',
      '$210',
    ]);
  });
});    
