import { connect } from 'react-redux';
import { RootState } from '../../../store/root-reducer';
import {
  ICardButtonProps,
  CardButton,
  ICardButtonActionProps,
} from './card-button';
import { superListAddEmployeeActionBuilder } from '../../../store/app-action-reducer.actions';

const addEmployeeToSuperList = superListAddEmployeeActionBuilder;

const addEmployeeActionProps: ICardButtonActionProps = {
  onPress: addEmployeeToSuperList,
};
const actions = addEmployeeActionProps;

export const mapStateToProps = (state: RootState): ICardButtonProps => {
  return {
    ...state,
    type: 'add',
    employeeId: state.appActionReducer.employeeList.find(
      emp => emp.id === state.appActionReducer.employeeList[0].id
    ).id,
  };
};

export const ConnectedAddButton = connect(mapStateToProps, actions)(CardButton);
