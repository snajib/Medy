import { connect } from 'react-redux';
import { RootState } from '../../../store/root-reducer';
import {
  superListAddEmployeeActionBuilder,
  superListRemoveEmployeeActionBuilder,
} from '../../../store/app-action-reducer.actions';
import {
  IHorizontalScrollProps,
  IHorizontalScrollActionProps,
  HorizontalScroll,
} from './horizontal-scroll';
import { ProfileCardTypes } from './Card';

const addEmployeeToSuperList = superListAddEmployeeActionBuilder;
const removeEmployeeFromSuperList = superListRemoveEmployeeActionBuilder;

const addEmployeeActionProps: IHorizontalScrollActionProps = {
  onAddSuperList: addEmployeeToSuperList,
  onRemoveSuperList: removeEmployeeFromSuperList,
};
const actions = addEmployeeActionProps;

export const mapStateToProps = (state: RootState): IHorizontalScrollProps => {
  return {
    ...state,
    style: ProfileCardTypes.FINDER_DEFAULT_CARD_STYLE,
    employeeList: state.appActionReducer.employeeList,
  };
};

export const ConnectedHorizontalScroll = connect(
  mapStateToProps,
  actions
)(HorizontalScroll);
