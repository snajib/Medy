import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerProfileScreen } from './EmployerProfileScreen';
import { View, Text } from 'react-native';

describe('EmployerProfileScreen', () => {
  it('should render header correctly', () => {
    const profileScreen = renderer.create(<EmployerProfileScreen />);

    expect(profileScreen.root.findAllByType(Text).length).toBe(7);
    expect(profileScreen.root.findAllByType(Text)[0].props.children).toBe(
      'Profile',
    );
  });

  it('should render views correctly', () => {
    const profileScreen = renderer.create(<EmployerProfileScreen />);

    expect(profileScreen.root.findAllByType(View).length).toBe(17);
  });

  it('should render with snapshot', () => {
    const employerProfScreen = renderer.create(<EmployerProfileScreen />);
    expect(employerProfScreen.toJSON()).toMatchSnapshot();
  });
});
