import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Categories from '../components/homePageComponents/Categories';

describe('Categories tests', () => {
  test('should render', () => {
    const data = {
      country: 'India',
      TotalConfirmed: 1000,
    };
    const Categories = render(
      <BrowserRouter>
        <Categories data={data} />
      </BrowserRouter>,
    );

    expect(Categories).toMatchSnapshot();
  });
});
