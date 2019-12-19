import {
  ISuperListAddEmployeeAction,
  ISuperListRemoveEmployeeAction,
} from './app-action-reducer';

export enum AppReducerActionKeys {
  SUPER_LIST_ADD = 'SUPER_LIST_ADD',
  SUPER_LIST_REMOVE = 'SUPER_LIST_REMOVE',
}

export const superListAddEmployeeActionBuilder = (
  employeeId: string
): ISuperListAddEmployeeAction => {
  return {
    payload: employeeId,
    type: AppReducerActionKeys.SUPER_LIST_ADD,
  };
};

export const superListRemoveEmployeeActionBuilder = (
  employeeId: string
): ISuperListRemoveEmployeeAction => {
  return {
    payload: employeeId,
    type: AppReducerActionKeys.SUPER_LIST_REMOVE,
  };
};
