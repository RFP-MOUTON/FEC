import React from 'react';
import { shallow } from 'enzyme';

import Reviews from '../../src/Components/ReviewsContainer.jsx';

describe('Review Container Componenet', () => {
  it('should render correctly', () => {
    const component = shallow(<Reviews />);

    expect(component).toMatchSnapshot();
  });
});
