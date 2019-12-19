import {
  IEmployerState,
  IEmployee,
  IPosting,
} from '../store/app-action-reducer';

export const mockEmployer: IEmployerState = {
  name: 'Test Employer',
};

const mockEmployee1: IEmployee = {
  id: '000001',
  description: 'description',
  jobTitle: 'Nurse',
  name: 'John Doe',
  profilePicture: {
    uri:
      'https://images.unsplash.com/photo-1556822256-05a527652985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  rating: 5,
  summary:
    'Summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary ',

  experience: [
    {
      title: 'Nurse',
      company: 'ABC Offices',
      employementType: 'Full-Time',
      location: 'Michigan',
      startDate: 'Feb 2017',
      endDate: 'Present',
    },
    {
      title: 'Dental Assistant',
      company: 'XYZ Offices',
      employementType: 'Full-Time',
      location: 'Michigan',
      startDate: 'Feb 2014',
      endDate: 'Dec 2016',
    },
    {
      title: 'Anesthesiologist',
      company: '123 Offices',
      employementType: 'Full-Time',
      location: 'Michigan',
      startDate: 'Mar 2010',
      endDate: 'Jan 2014',
    },
  ],
};

const mockEmployee2: IEmployee = {
  id: '000001',
  description: 'description',
  jobTitle: 'Doctor',
  name: 'Jane Doe',
  profilePicture: {
    uri:
      'https://images.unsplash.com/photo-1499358517822-d8578907a095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80',
  },
  rating: 4,
  summary:
    'Summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary ',
  experience: [
    {
      title: 'Doctor',
      company: 'ABC Offices',
      employementType: 'Full-Time',
      location: 'Michigan',
      startDate: 'Feb 2017',
      endDate: 'Present',
    },
    {
      title: 'Doctor',
      company: 'XYZ Offices',
      employementType: 'Full-Time',
      location: 'Atlanta',
      startDate: 'Feb 2014',
      endDate: 'Dec 2016',
    },
    {
      title: 'Doctor',
      company: '123 Offices',
      employementType: 'Full-Time',
      location: 'San Francisco',
      startDate: 'Mar 2010',
      endDate: 'Jan 2014',
    },
  ],
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
