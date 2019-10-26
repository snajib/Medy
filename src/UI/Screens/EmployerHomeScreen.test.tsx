import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerHomeScreen } from './EmployerHomeScreen';
import { View } from 'react-native';

describe('EmployerHomeScreen', () => {
  it('should render views correctly', () => {
    const homeScreen = renderer.create(<EmployerHomeScreen />);

    expect(homeScreen.root.findAllByType(View).length).toBe(8);
  });

  it('should render with snapshot', () => {
    const employerHomeScreen = renderer.create(<EmployerHomeScreen />);
    expect(employerHomeScreen.toJSON()).toMatchSnapshot();
  });
});
