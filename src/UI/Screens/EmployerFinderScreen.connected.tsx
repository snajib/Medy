import {
  IEmployerFinderScreenProps,
  EmployerFinderScreen,
} from './EmployerFinderScreen';
import { connect } from 'react-redux';
import { RootState } from '../../../store/root-reducer';

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
