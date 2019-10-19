// Copyright 2018 Prescryptive Health Inc
import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerAccountScreen } from './EmployerAccountScreen';

it('should render with snapshot', () => {
  const pricingScreen = renderer.create(<EmployerAccountScreen />);
  expect(pricingScreen.toJSON()).toMatchSnapshot();
});
