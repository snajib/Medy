import React from 'react';
import { HorizontalScroll } from '../Shared/horizontal-scroll';
import { IEmployee } from '../../../store/app-action-reducer';
import { ImageBackground } from 'react-native';

export interface IEmployerFinderScreenProps {
  EmployeeList: IEmployee[];
}

export class EmployerFinderScreen extends React.Component<
  IEmployerFinderScreenProps
> {
  public empList = this.props.EmployeeList.map(employee => employee.name);

  render() {
    return (
      <ImageBackground
        source={require('../../../assets/background-gradient.png')}
        style={{ flex: 1 }}
      >
        <HorizontalScroll
          style='finderDefaultCardStyle'
          employeeList={this.props.EmployeeList}
        />
      </ImageBackground>
    );
  }
}
