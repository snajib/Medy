import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerAccountScreen } from './EmployerAccountScreen';
import { View, Text } from 'react-native';

describe('EmployerAccountScreen', () => {
  it('should render header correctly', () => {
    const employerScreen = renderer.create(<EmployerAccountScreen />);

    expect(employerScreen.root.findAllByType(Text).length).toBe(1);
    expect(employerScreen.root.findAllByType(Text)[0].props.children).toBe(
      'Account',
    );
  });

  it('should render views correctly', () => {
    const employerScreen = renderer.create(<EmployerAccountScreen />);

    expect(employerScreen.root.findAllByType(View).length).toBe(3);
  });

  it('should render with snapshot', () => {
    const employerAcctScreen = renderer.create(<EmployerAccountScreen />);
    expect(employerAcctScreen.toJSON()).toMatchSnapshot();
  });
});
