import React from 'react';
import { View } from 'react-native';
import { styles } from '../Shared/styles';
import { HorizontalScroll } from '../Shared/horizontal-scroll';
import { IEmployee } from '../../../store/app-action-reducer';

export interface IEmployerFinderScreenProps {
  EmployeeList: IEmployee[];
}

export class EmployerFinderScreen extends React.Component<
  IEmployerFinderScreenProps
> {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <HorizontalScroll
          style={styles.finderDefaultCardStyle}
          schema={this.props.EmployeeList.map(employee => employee.name)}
        />
      </View>
    );
  }
}
