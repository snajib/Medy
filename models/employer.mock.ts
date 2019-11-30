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
  summary:
    'I like to telhas my teez a lot and I have a lot of experience with EDBTZ. With this experience, I have acheived my final form as a teez; Super Teez God. I was able to defeat even Jiren, master of teez with the help of Vegeta and Goku; fellow teez.',

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
      title: 'Nurse',
      company: 'XYZ Offices',
      employementType: 'Full-Time',
      location: 'Michigan',
      startDate: 'Feb 2014',
      endDate: 'Dec 2016',
    },
    {
      title: 'Nurse',
      company: '123 Offices',
      employementType: 'Full-Time',
      location: 'Michigan',
      startDate: 'Mar 2010',
      endDate: 'Jan 2014',
    },
  ],
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
  summary:
    'I have a lot of experience with helping people telhas my teez, and love having EDBTZ. I am great at helping people get their ED into their TZ. I also have experience at ram ranch, and other similar places.',
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
