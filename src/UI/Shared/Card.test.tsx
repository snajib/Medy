import React from 'react';
import renderer from 'react-test-renderer';
import { styles } from './styles';
import { Card, ICardProps } from './card';
import { Text, View } from 'react-native';

const cardProps: ICardProps = {
  profileName: 'Test',
  summary: 'abc',
  key: 'key',
};

it('should render the correct card based on props', () => {
  const card = renderer.create(
    <Card {...cardProps} style={styles.finderDefaultCardStyle} />,
  );
  expect(card.root.props.style.height).toBe(1034);

  const card2 = renderer.create(
    <Card {...cardProps} style={styles.finderSandwichCardStyle} />,
  );
  expect(card2.root.props.style.height).toBe(684);
});

it('should render the correct number of components', () => {
  const card = renderer.create(
    <Card {...cardProps} style={styles.finderDefaultCardStyle} />,
  );
  expect(card.root.findAllByType(Text).length).toBe(2);
  expect(card.root.findAllByType(Text)[0].props.children).toEqual(
    cardProps.profileName,
  );
  expect(card.root.findAllByType(Text)[1].props.children).toEqual(
    cardProps.summary,
  );
  expect(card.root.findAllByType(View).length).toBe(2);
});

it('should render with snapshot', () => {
  const card = renderer.create(
    <Card {...cardProps} style={styles.finderDefaultCardStyle} />,
  );

  const card2 = renderer.create(
    <Card {...cardProps} style={styles.finderSandwichCardStyle} />,
  );

  expect(card.toJSON()).toMatchSnapshot();
  expect(card2.toJSON()).toMatchSnapshot();
});
