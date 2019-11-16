import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerSettingsScreen } from './EmployerSettingsScreen';
import { View, Text } from 'react-native';

describe('EmployerSettingsScreen', () => {
  it('should render header correctly', () => {
    const settingsScreen = renderer.create(<EmployerSettingsScreen />);

    expect(settingsScreen.root.findAllByType(Text).length).toBe(9);
    expect(settingsScreen.root.findAllByType(Text)[0].props.children).toBe(
      'Settings',
    );
  });

  it('should render views correctly', () => {
    const settingsScreen = renderer.create(<EmployerSettingsScreen />);

    expect(settingsScreen.root.findAllByType(View).length).toBe(21);
  });

  it('should render with snapshot', () => {
    const employerSettScreen = renderer.create(<EmployerSettingsScreen />);
    expect(employerSettScreen.toJSON()).toMatchSnapshot();
  });
});
