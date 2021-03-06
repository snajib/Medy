import React from 'react';
import { IEmployee } from '../../../store/app-action-reducer';
import { View } from 'react-native';
import { styles } from '../Shared/styles';
import { ConnectedHorizontalScroll } from '../Shared/horizontal-scroll.connected';

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
        <ConnectedHorizontalScroll />
      </View>
    );
  }
}
