import {
  IEmployerFinderScreenProps,
  EmployerFinderScreen,
} from './EmployerFinderScreen';
import { IEmployerApplicationState } from '../../../store/app-action-reducer';
import { connect } from 'react-redux';

export const mapStateToProps = (
  state: IEmployerApplicationState,
): IEmployerFinderScreenProps => {
  if (!state.employeeList) {
    throw new Error('Missing Employee List');
  }

  const employeeList = state.employeeList;

  return {
    EmployeeList: employeeList,
  };
};

export const ConnectedEmployerFinderScreen = connect(mapStateToProps)(
  EmployerFinderScreen,
);
