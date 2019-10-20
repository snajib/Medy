import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerAccountScreen } from './EmployerAccountScreen';

{
  /* <LinearGradient /> */
}
// jest.mock('');

jest.doMock('expo-linear-gradient', () => {
  LinearGradient: () => 'LinearGradient';
});

it('should render with snapshot', () => {
  const employerAcctScreen = renderer.create(<EmployerAccountScreen />);
  expect(employerAcctScreen.toJSON()).toMatchSnapshot();
});
