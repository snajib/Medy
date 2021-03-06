import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerHistoryScreen } from './EmployerHistoryScreen';
import { View, Text } from 'react-native';

describe('EmployerHistoryScreen', () => {
  it('should render header correctly', () => {
    const historyScreen = renderer.create(<EmployerHistoryScreen />);

    expect(historyScreen.root.findAllByType(Text).length).toBe(7);
    expect(historyScreen.root.findAllByType(Text)[0].props.children).toBe(
      'History',
    );
  });

  it('should render views correctly', () => {
    const historyScreen = renderer.create(<EmployerHistoryScreen />);

    expect(historyScreen.root.findAllByType(View).length).toBe(17);
  });

  it('should render with snapshot', () => {
    const employerHistScreen = renderer.create(<EmployerHistoryScreen />);
    expect(employerHistScreen.toJSON()).toMatchSnapshot();
  });
});
