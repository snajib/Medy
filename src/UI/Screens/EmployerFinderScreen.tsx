import React from 'react';
import { HorizontalScroll } from '../Shared/horizontal-scroll';
import { IEmployee } from '../../../store/app-action-reducer';
import { View } from 'react-native';
import { styles } from '../Shared/styles';

export interface IEmployerFinderScreenProps {
  EmployeeList: IEmployee[];
}

export class EmployerFinderScreen extends React.Component<
  IEmployerFinderScreenProps
> {
  public empList = this.props.EmployeeList.map(employee => employee.name);

  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <HorizontalScroll
          style='finderDefaultCardStyle'
          employeeList={this.props.EmployeeList}
        />
      </View>
    );
  }
}
