import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native';
import { EmployerCalenderScreen } from './EmployerCalenderScreen';

describe('EmployerCalenderScreen', () => {
  it('should render header correctly', () => {
    const calenderScreen = renderer.create(<EmployerCalenderScreen />);

    expect(calenderScreen.root.findAllByType(Text).length).toBe(1);
    expect(calenderScreen.root.findAllByType(Text)[0].props.children).toBe(
      'Calender',
    );
  });

  it('should render views correctly', () => {
    const calenderScreen = renderer.create(<EmployerCalenderScreen />);

    expect(calenderScreen.root.findAllByType(View).length).toBe(3);
  });

  it('should render with snapshot', () => {
    const employerCalenScreen = renderer.create(<EmployerCalenderScreen />);
    expect(employerCalenScreen.toJSON()).toMatchSnapshot();
  });
});
