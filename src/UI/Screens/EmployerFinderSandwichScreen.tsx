import React from 'react';
import { View } from 'react-native';
import { styles } from '../Shared/styles';
import { VerticalScroll } from '../Shared/vertical-scroll';
import { IEmployee } from '../../../store/app-action-reducer';

export interface IEmployerFinderSandwichScreenProps {
  EmployeeList: IEmployee[];
}

export class EmployerFinderSandwichScreen extends React.Component<
  IEmployerFinderSandwichScreenProps
> {
  public empList = this.props.EmployeeList.map(employee => employee.name);

  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <VerticalScroll
          style='finderSandwichCardStyle'
          schema={this.empList}
          snapToInterval={0}
        />
      </View>
    );
  }
}
