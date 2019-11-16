import {
  IEmployerFinderScreenProps,
  EmployerFinderScreen,
} from './EmployerFinderScreen';
import { connect } from 'react-redux';
import { RootState } from '../../../store/root-reducer';
// import { mockEmployeeList } from '../../../models/employer.mock';

export const mapStateToProps = (
  state: RootState
): IEmployerFinderScreenProps => {
  return {
    ...state,
    EmployeeList: state.appActionReducer.employeeList,
  };
};

export const ConnectedEmployerFinderScreen = connect(mapStateToProps)(
  EmployerFinderScreen
);
