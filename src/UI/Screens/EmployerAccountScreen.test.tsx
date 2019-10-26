import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerAccountScreen } from './EmployerAccountScreen';
import { View, Text } from 'react-native';

describe('EmployerAccountScreen', () => {
  it('should render header correctly', () => {
    const accountScreen = renderer.create(<EmployerAccountScreen />);

    expect(accountScreen.root.findAllByType(Text).length).toBe(7);
    expect(accountScreen.root.findAllByType(Text)[0].props.children).toBe(
      'Account',
    );
  });

  it('should render views correctly', () => {
    const accountScreen = renderer.create(<EmployerAccountScreen />);

    expect(accountScreen.root.findAllByType(View).length).toBe(17);
  });

  it('should render with snapshot', () => {
    const employerAcctScreen = renderer.create(<EmployerAccountScreen />);
    expect(employerAcctScreen.toJSON()).toMatchSnapshot();
  });
});
