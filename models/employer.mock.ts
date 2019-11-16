import {
  IEmployerState,
  IEmployee,
  IPosting,
} from '../store/app-action-reducer';

export const mockEmployer: IEmployerState = {
  name: 'Test Employer',
};

const mockEmployee1: IEmployee = {
  description: 'description',
  jobTitle: 'Nurse',
  name: 'John Doe',
  rating: 5,
};

const mockEmployee2: IEmployee = {
  description: 'description',
  jobTitle: 'Doctor',
  name: 'Jane Doe',
  rating: 4,
};

const mockPosting1: IPosting = {
  description: 'description',
  name: 'Post 1',
};

const mockPosting2: IPosting = {
  description: 'description',
  name: 'Post 2',
};

export const mockEmployeeList: IEmployee[] = [mockEmployee1, mockEmployee2];
export const mockPostingList: IPosting[] = [mockPosting1, mockPosting2];
