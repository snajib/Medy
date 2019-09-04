export const names = {
   EmployerHome: "Home",
   EmployerFinder: "Finder",
   EmployerPostings: "Postings",
   EmployerMore: "More",
   EmployerProfile: "Profile",
   EmployerAccount: "Account",
   EmployerHistory: "History",
   EmployerSettings: "Settings",
   EmployerHelp: "Help"
};

const routeSuffix = {
   screen: "Screen"
};

export const screenNames = routeName => `${routeName}${routeSuffix.screen}`;
