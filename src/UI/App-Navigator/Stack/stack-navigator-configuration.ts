import {
  createStackNavigator,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  EmployerHomeScreen,
  EmployerPostingsScreen,
  EmployerMoreScreen,
  EmployerProfileScreen,
  EmployerAccountScreen,
  EmployerHistoryScreen,
  EmployerSettingsScreen,
  EmployerHelpScreen,
} from '../../Screens';
import { names, screenNames } from '../route-config';
import {
  stackNavigatorOptions,
  finderSandwichStackNavigatorOptions,
  finderRegularStackNavigatorOptions,
  finderSuperListStackNavigatorOptions,
} from './stack-navigator-tab-options';
import { ConnectedEmployerFinderScreen } from '../../Screens/EmployerFinderScreen.connected';
import { ConnectedEmployerFinderSandwichScreen } from '../../Screens/EmployerFinderSandwichScreen.connected';
import { ConnectedEmployerFinderSuperListScreen } from '../../Screens/EmployerFinderSuperListScreen.connected';

const screenRoutes = (
  routeName: string,
  screenName: any,
  navigatorOptions: any
) => ({
  [screenNames(routeName)]: {
    screen: screenName,
    ...navigatorOptions,
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
  initialRoute: string
) =>
  createStackNavigator(route, {
    initialRouteName: initialRoute,
  });

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
  stackNavigatorOptions
);
const employerFinderStackRoutes = {
  ...screenRoutes(
    names.EmployerFinder,
    ConnectedEmployerFinderScreen,
    finderSandwichStackNavigatorOptions
  ),
  ...screenRoutes(
    names.EmployerFinderSandwich,
    ConnectedEmployerFinderSandwichScreen,
    finderRegularStackNavigatorOptions
  ),
  ...screenRoutes(
    names.EmployerFinderSuperList,
    ConnectedEmployerFinderSuperListScreen,
    finderSuperListStackNavigatorOptions
  ),
};

const employerPostingsStackRoutes = screenRoutes(
  names.EmployerPostings,
  EmployerPostingsScreen,
  stackNavigatorOptions
);
const employerMoreStackRoutes = screenRoutes(
  names.EmployerMore,
  EmployerMoreScreen,
  stackNavigatorOptions
);

const employerTabHomeStackNavigator = tabStackNavigator(
  employerHomeStackRoutes,
  screenNames(names.EmployerHome)
);
const employerTabFinderStackNavigator = tabStackNavigator(
  employerFinderStackRoutes,
  screenNames(names.EmployerFinder)
);
const employerTabPostingsStackNavigator = tabStackNavigator(
  employerPostingsStackRoutes,
  screenNames(names.EmployerPostings)
);
const employerTabMoreStackNavigator = tabStackNavigator(
  employerMoreStackRoutes,
  screenNames(names.EmployerMore)
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
  stackNavigatorOptions
);
const employerHistoryStackRoutes = screenRoutes(
  names.EmployerHistory,
  EmployerHistoryScreen,
  stackNavigatorOptions
);
const employerSettingsStackRoutes = screenRoutes(
  names.EmployerSettings,
  EmployerSettingsScreen,
  stackNavigatorOptions
);
const employerHelpStackRoutes = screenRoutes(
  names.EmployerHelp,
  EmployerHelpScreen,
  stackNavigatorOptions
);
const employerProfileStackRoutes = screenRoutes(
  names.EmployerProfile,
  EmployerProfileScreen,
  stackNavigatorOptions
);

export const employerDrawerAccountStackNavigator = tabStackNavigator(
  employerAccountStackRoutes,
  screenNames(names.EmployerAccount)
);
export const employerDrawerHistoryStackNavigator = tabStackNavigator(
  employerHistoryStackRoutes,
  screenNames(names.EmployerHistory)
);
export const employerDrawerSettingsStackNavigator = tabStackNavigator(
  employerSettingsStackRoutes,
  screenNames(names.EmployerSettings)
);
export const employerDrawerHelpStackNavigator = tabStackNavigator(
  employerHelpStackRoutes,
  screenNames(names.EmployerHelp)
);
export const employerDrawerProfileStackNavigator = tabStackNavigator(
  employerProfileStackRoutes,
  screenNames(names.EmployerProfile)
);
