import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerFinderSandwichScreen } from './EmployerFinderSandwichScreen';
import { View } from 'react-native';

describe('EmployerFinderSandwichScreen', () => {
  it('should render views correctly', () => {
    const finderSandiwchScreen = renderer.create(
      <EmployerFinderSandwichScreen />
    );

    expect(finderSandiwchScreen.root.findAllByType(View).length).toBe(14);
  });

  it('should render with snapshot', () => {
    const employerSandiwchScreen = renderer.create(
      <EmployerFinderSandwichScreen />
    );
    expect(employerSandiwchScreen.toJSON()).toMatchSnapshot();
  });
});
