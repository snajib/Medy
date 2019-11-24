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
  profilePicture: {
    uri:
      'https://images.unsplash.com/photo-1556822256-05a527652985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  rating: 5,
};

const mockEmployee2: IEmployee = {
  description: 'description',
  jobTitle: 'Doctor',
  name: 'Jane Doe',
  profilePicture: {
    uri:
      'https://images.unsplash.com/photo-1499358517822-d8578907a095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80',
  },
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
