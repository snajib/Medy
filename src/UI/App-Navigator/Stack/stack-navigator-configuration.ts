import {
  createStackNavigator,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  EmployerHomeScreen,
  EmployerFinderScreen,
  EmployerPostingsScreen,
  EmployerMoreScreen,
  EmployerProfileScreen,
  EmployerAccountScreen,
  EmployerHistoryScreen,
  EmployerSettingsScreen,
  EmployerHelpScreen,
} from '../../Screens';
import { names, screenNames } from '../route-config';
import { stackNavigatorOptions } from './stack-navigator-tab-options';

const screenRoutes = (routeName: string, screenName: any) => ({
  [screenNames(routeName)]: {
    screen: screenName,
    ...stackNavigatorOptions,
  },
});

/* 
    We can add more things like props later on as variables in this section
    Each stack is created with its own route names and initialRoutes. We 
    do this to reduce redundancy. If we need to change a fundamental ascpect
    of all the stacks in the tab navigator, change it here

*/
const tabStackNavigator = (
  route: NavigationRouteConfigMap,
  initialRoute: string,
) =>
  createStackNavigator(route, {
    initialRouteName: initialRoute,
  });

//TODO: Create one for Drawer

/* 
    To ADD more routes to a particular stack use the screenRoutes
    function to add a screen route to the proper stack routes variable

    Note: List the proper names of the routes you want to add in the 
    route-config.tsx file located under App-Navigator

    Note: to add more than one route to the stack routes use brackets
    and a spread operator ('...') on all screenRoutes functions

    Ex. 
    const homeStackRoutes = {
        ...screenRoutes(names.EmployerHome, EmployerHomeScreen);
        ...screenRoutes(names._____, Employer____Screen)
    }
*/
const employerHomeStackRoutes = screenRoutes(
  names.EmployerHome,
  EmployerHomeScreen,
);
const employerFinderStackRoutes = screenRoutes(
  names.EmployerFinder,
  EmployerFinderScreen,
);
const employerPostingsStackRoutes = screenRoutes(
  names.EmployerPostings,
  EmployerPostingsScreen,
);
const employerMoreStackRoutes = screenRoutes(
  names.EmployerMore,
  EmployerMoreScreen,
);

const employerTabHomeStackNavigator = tabStackNavigator(
  employerHomeStackRoutes,
  screenNames(names.EmployerHome),
);
const employerTabFinderStackNavigator = tabStackNavigator(
  employerFinderStackRoutes,
  screenNames(names.EmployerFinder),
);
const employerTabPostingsStackNavigator = tabStackNavigator(
  employerPostingsStackRoutes,
  screenNames(names.EmployerPostings),
);
const employerTabMoreStackNavigator = tabStackNavigator(
  employerMoreStackRoutes,
  screenNames(names.EmployerMore),
);

export const tabStack = {
  Home: employerTabHomeStackNavigator,
  Finder: employerTabFinderStackNavigator,
  Postings: employerTabPostingsStackNavigator,
  More: employerTabMoreStackNavigator,
};

const employerAccountStackRoutes = screenRoutes(
  names.EmployerAccount,
  EmployerAccountScreen,
);
const employerHistoryStackRoutes = screenRoutes(
  names.EmployerHistory,
  EmployerHistoryScreen,
);
const employerSettingsStackRoutes = screenRoutes(
  names.EmployerSettings,
  EmployerSettingsScreen,
);
const employerHelpStackRoutes = screenRoutes(
  names.EmployerHelp,
  EmployerHelpScreen,
);
const employerProfileStackRoutes = screenRoutes(
  names.EmployerProfile,
  EmployerProfileScreen,
);

export const employerDrawerAccountStackNavigator = tabStackNavigator(
  employerAccountStackRoutes,
  screenNames(names.EmployerAccount),
);
export const employerDrawerHistoryStackNavigator = tabStackNavigator(
  employerHistoryStackRoutes,
  screenNames(names.EmployerHistory),
);
export const employerDrawerSettingsStackNavigator = tabStackNavigator(
  employerSettingsStackRoutes,
  screenNames(names.EmployerSettings),
);
export const employerDrawerHelpStackNavigator = tabStackNavigator(
  employerHelpStackRoutes,
  screenNames(names.EmployerHelp),
);
export const employerDrawerProfileStackNavigator = tabStackNavigator(
  employerProfileStackRoutes,
  screenNames(names.EmployerProfile),
);
