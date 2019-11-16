export const names = {
  EmployerHome: 'Home',
  EmployerFinder: 'Finder',
  EmployerFinderSandwich: 'FinderSandwich',
  EmployerPostings: 'Postings',
  EmployerMore: 'More',
  EmployerProfile: 'Profile',
  EmployerAccount: 'Account',
  EmployerHistory: 'History',
  EmployerSettings: 'Settings',
  EmployerHelp: 'Help',
};

const routeSuffix = {
  screen: 'Screen',
};

export const screenNames = (routeName: string) =>
  `${routeName}${routeSuffix.screen}`;
