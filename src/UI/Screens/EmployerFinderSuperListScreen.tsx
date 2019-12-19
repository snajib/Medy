import React from 'react';
import { IEmployee } from '../../../store/app-action-reducer';
import { View } from 'react-native';
import { styles } from '../Shared/styles';

export interface IEmployerFinderSuperListScreenProps {
  EmployeeList: IEmployee[];
}

export class EmployerFinderSuperListScreen extends React.Component<
  IEmployerFinderSuperListScreenProps
> {
  render() {
    return <View style={styles.topPrimaryContainterStyle}></View>;
  }
}
