import React from 'react';
import renderer from 'react-test-renderer';
import { VerticalScroll } from './vertical-scroll';
import { styles } from './styles';
import { Card } from './Card';
import { ScrollView, View } from 'react-native';

const mockSchema = [
  'Profile 1',
  'Profile 2',
  'Profile 3',
  'Profile 4',
  'Profile 5'
];

describe('Vertical-Scroll', () => {
  it('should render the correct number of profiles', () => {
    const verticalScroll = renderer.create(
      <VerticalScroll
        style={styles.finderSandwichCardStyle}
        schema={mockSchema}
        snapToInterval={0}
      />
    );
    expect(verticalScroll.root.findAllByType(Card).length).toBe(5);
  });

  it('should render the correct number of components', () => {
    const verticalScroll = renderer.create(
      <VerticalScroll
        style={styles.finderSandwichCardStyle}
        schema={mockSchema}
        snapToInterval={0}
      />
    );
    expect(verticalScroll.root.findAllByType(ScrollView).length).toBe(1);
    expect(verticalScroll.root.findAllByType(View).length).toBe(11);
  });

  it('should render with snapshot', () => {
    const verticalScroll = renderer.create(
      <VerticalScroll
        style={styles.finderDefaultCardStyle}
        schema={mockSchema}
        snapToInterval={0}
      />
    );
    expect(verticalScroll.toJSON()).toMatchSnapshot();
  });
});
