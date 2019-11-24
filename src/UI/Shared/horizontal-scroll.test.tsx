import React from 'react';
import renderer from 'react-test-renderer';
import { HorizontalScroll } from './horizontal-scroll';
import { styles } from './styles';
import { Card } from './Card';
import { ScrollView, View } from 'react-native';

const mockSchema = [
  'Profile 1',
  'Profile 2',
  'Profile 3',
  'Profile 4',
  'Profile 5',
];

describe('Horizontal-Scroll', () => {
  it('should render the correct number of profiles', () => {
    const horizontalScroll = renderer.create(
      <HorizontalScroll
        style={styles.finderDefaultCardStyle}
        employeeList={mockSchema}
      />
    );
    expect(horizontalScroll.root.findAllByType(Card).length).toBe(5);
  });

  it('should render the correct number of components', () => {
    const horizontalScroll = renderer.create(
      <HorizontalScroll
        style={styles.finderDefaultCardStyle}
        employeeList={mockSchema}
      />
    );
    expect(horizontalScroll.root.findAllByType(ScrollView).length).toBe(1);
    expect(horizontalScroll.root.findAllByType(View).length).toBe(12);
  });

  it('should render with snapshot', () => {
    const horizontalScroll = renderer.create(
      <HorizontalScroll
        style={styles.finderDefaultCardStyle}
        employeeList={mockSchema}
      />
    );
    expect(horizontalScroll.toJSON()).toMatchSnapshot();
  });
});
