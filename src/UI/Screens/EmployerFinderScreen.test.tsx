import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerFinderScreen } from './EmployerFinderScreen';
import { View } from 'react-native';

describe('EmployerFinderScreen', () => {
  it('should render views correctly', () => {
    const finderScreen = renderer.create(<EmployerFinderScreen />);

    expect(finderScreen.root.findAllByType(View).length).toBe(13);
  });

  it('should render with snapshot', () => {
    const employerFindScreen = renderer.create(<EmployerFinderScreen />);
    expect(employerFindScreen.toJSON()).toMatchSnapshot();
  });
});
