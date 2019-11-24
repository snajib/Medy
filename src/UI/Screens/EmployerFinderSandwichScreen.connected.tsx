import { connect } from 'react-redux';
import { RootState } from '../../../store/root-reducer';
import {
  EmployerFinderSandwichScreen,
  IEmployerFinderSandwichScreenProps,
} from './EmployerFinderSandwichScreen';

export const mapStateToProps = (
  state: RootState
): IEmployerFinderSandwichScreenProps => {
  return {
    ...state,
    EmployeeList: state.appActionReducer.employeeList,
  };
};

export const ConnectedEmployerFinderSandwichScreen = connect(mapStateToProps)(
  EmployerFinderSandwichScreen
);
