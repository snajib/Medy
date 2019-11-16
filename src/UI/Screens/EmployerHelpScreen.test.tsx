import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native';
import { EmployerHelpScreen } from './EmployerHelpScreen';

describe('EmployerHelpScreen', () => {
  it('should render header correctly', () => {
    const helpScreen = renderer.create(<EmployerHelpScreen />);

    expect(helpScreen.root.findAllByType(Text).length).toBe(1);
    expect(helpScreen.root.findAllByType(Text)[0].props.children).toBe('Help');
  });

  it('should render views correctly', () => {
    const helpScreen = renderer.create(<EmployerHelpScreen />);

    expect(helpScreen.root.findAllByType(View).length).toBe(3);
  });

  it('should render with snapshot', () => {
    const employerhelpScreen = renderer.create(<EmployerHelpScreen />);
    expect(employerhelpScreen.toJSON()).toMatchSnapshot();
  });
});
