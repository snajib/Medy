import React from 'react';
import renderer from 'react-test-renderer';
import { HorizontalScroll } from './horizontal-scroll';
import { styles } from './styles';

it('should render with snapshot', () => {
  const horizontalScroll = renderer.create(
    <HorizontalScroll
      style={styles.finderDefaultCardStyle}
      schema={['Profile 1', 'Profile 2', 'Profile 3', 'Profile 4', 'Profile 5']}
    />,
  );
  expect(horizontalScroll.toJSON()).toMatchSnapshot();
});
