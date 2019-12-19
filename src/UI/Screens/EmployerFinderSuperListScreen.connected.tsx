import { connect } from 'react-redux';
import { RootState } from '../../../store/root-reducer';
import {
  IEmployerFinderSuperListScreenProps,
  EmployerFinderSuperListScreen,
} from './EmployerFinderSuperListScreen';

export const mapStateToProps = (
  state: RootState
): IEmployerFinderSuperListScreenProps => {
  return {
    ...state,
    EmployeeList: state.appActionReducer.superList,
  };
};

export const ConnectedEmployerFinderSuperListScreen = connect(mapStateToProps)(
  EmployerFinderSuperListScreen
);
