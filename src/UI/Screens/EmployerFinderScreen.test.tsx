import React from 'react';
import renderer from 'react-test-renderer';
import { EmployerFinderScreen } from './EmployerFinderScreen';
import { View } from 'react-native';

describe('EmployerFinderScreen', () => {
  it('should render views correctly', () => {
    const finderScreen = renderer.create(
      <EmployerFinderScreen
        EmployeeList={[{ description: '', jobTitle: '', name: '' }]}
      />
    );

    expect(finderScreen.root.findAllByType(View).length).toBe(5);
  });

  it('should render with snapshot', () => {
    const employerFindScreen = renderer.create(
      <EmployerFinderScreen
        EmployeeList={[{ description: '', jobTitle: '', name: '' }]}
      />
    );
    expect(employerFindScreen.toJSON()).toMatchSnapshot();
  });
});
