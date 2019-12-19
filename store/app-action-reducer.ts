import { AppReducerActionKeys } from './app-action-reducer.actions';
import {
  mockEmployeeList,
  mockEmployer,
  mockPostingList,
} from '../models/employer.mock';
import { ImageURISource } from 'react-native';

export interface IEmployerState {
  name: string;
}

export interface IEmployee {
  id: string;
  name: string;
  description: string;
  jobTitle?: string;
  profilePicture?: ImageURISource;
  rating?: number;
  summary?: string;
  experience?: IEmployeeExperience[];
}

export interface IEmployeeExperience {
  title: string;
  company: string;
  employementType?: string;
  location?: string;
  startDate: string;
  endDate: string;
}

export interface IHome {
  name: string;
}

export interface IPosting {
  dateExp?: Date;
  description: string;
  name: string;
}

export interface IEmployerApplicationState {
  employer: IEmployerState;
  employeeList: IEmployee[];
  postingList?: IPosting[];
  superList: IEmployee[];
}

export interface ISuperListAddEmployeeAction {
  readonly type: AppReducerActionKeys.SUPER_LIST_ADD;
  readonly payload: string;
}

export interface ISuperListRemoveEmployeeAction {
  readonly type: AppReducerActionKeys.SUPER_LIST_REMOVE;
  readonly payload: string;
}

export type EmployerActionTypes =
  | ISuperListAddEmployeeAction
  | ISuperListRemoveEmployeeAction;

export const DefaultEmployerPricingState: IEmployerApplicationState = {
  employeeList: mockEmployeeList,
  employer: mockEmployer,
  postingList: mockPostingList,
  superList: [],
};

const superListAddEmployeeActionReducer = (
  state: IEmployerApplicationState = DefaultEmployerPricingState,
  action: EmployerActionTypes
) => ({
  ...state,
  superList: state.superList.concat(
    state.employeeList.find(emp => emp.id === action.payload)
  ),
});

const superListRemoveEmployeeActionReducer = (
  state: IEmployerApplicationState = DefaultEmployerPricingState,
  action: EmployerActionTypes
) => ({
  ...state,
  superList: state.superList.filter(emp => emp.id !== action.payload),
});

export const appActionReducer = (
  state: IEmployerApplicationState = DefaultEmployerPricingState,
  action: EmployerActionTypes
): IEmployerApplicationState => {
  switch (action.type) {
    case AppReducerActionKeys.SUPER_LIST_ADD:
      return superListAddEmployeeActionReducer(state, action);
    case AppReducerActionKeys.SUPER_LIST_REMOVE:
      return superListRemoveEmployeeActionReducer(state, action);
  }
  return state;
};
