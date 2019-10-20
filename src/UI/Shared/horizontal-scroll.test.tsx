import React from 'react';
import renderer from 'react-test-renderer';
import { HorizontalScroll } from './horizontal-scroll';

it('should render with snapshot', () => {
  const horizontalScroll = renderer.create(<HorizontalScroll />);
  expect(horizontalScroll.toJSON()).toMatchSnapshot();
});
