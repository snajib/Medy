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
  name: string;
  description: string;
  jobTitle?: string;
  profilePicture?: ImageURISource;
  rating?: number;
  summary?: string;
  experience?: string;
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
}

export interface ISuperListAdd {
  readonly type: AppReducerActionKeys.SUPER_LIST_ADD;
  readonly payload: string;
}

export interface ISuperListRemove {
  readonly type: AppReducerActionKeys.SUPER_LIST_REMOVE;
  readonly payload: string;
}

export type EmployerActionTypes = ISuperListAdd | ISuperListRemove;

export const DefaultEmployerPricingState: IEmployerApplicationState = {
  employeeList: mockEmployeeList,
  employer: mockEmployer,
  postingList: mockPostingList,
};

export const appActionReducer = (
  state: IEmployerApplicationState = DefaultEmployerPricingState,
  action: EmployerActionTypes
): IEmployerApplicationState => {
  switch (action.type) {
  }
  return state;
};
