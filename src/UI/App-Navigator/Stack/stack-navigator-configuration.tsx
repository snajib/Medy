import { createStackNavigator } from "react-navigation";
import {
  EmployerHomeScreen,
  EmployerFinderScreen,
  EmployerPostingsScreen,
  EmployerMoreScreen
} from "../../Screens";
import { names, screenNames } from "../route-config";
import { stackNavigatorOptions } from "./stack-navigator-tab-options";

const screenRoutes = (routeName, screenName) => ({
  [screenNames(routeName)]: {
    screen: screenName,
    ...stackNavigatorOptions
  }
});

/* 
    We can add more things like props later on as variables in this section
    Each stack is created with its own route names and initialRoutes. We 
    do this to reduce redundancy. If we need to change a fundamental ascpect
    of all the stacks in the tab navigator, change it here

*/
const tabStackNavigator = (route, initialRoute) =>
  createStackNavigator(route, {
    initialRouteName: initialRoute
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
const homeStackRoutes = screenRoutes(names.EmployerHome, EmployerHomeScreen);
const finderStackRoutes = screenRoutes(
  names.EmployerFinder,
  EmployerFinderScreen
);
const postingsStackRoutes = screenRoutes(
  names.EmployerPostings,
  EmployerPostingsScreen
);
const moreStackRoutes = screenRoutes(names.EmployerMore, EmployerMoreScreen);

const tabHomeStackNavigator = tabStackNavigator(
  homeStackRoutes,
  screenNames(names.EmployerHome)
);
const tabFinderStackNavigator = tabStackNavigator(
  finderStackRoutes,
  screenNames(names.EmployerFinder)
);
const tabPostingsStackNavigator = tabStackNavigator(
  postingsStackRoutes,
  screenNames(names.EmployerPostings)
);
const tabMoreStackNavigator = tabStackNavigator(
  moreStackRoutes,
  screenNames(names.EmployerMore)
);

export const tabStack = {
  Home: tabHomeStackNavigator,
  Finder: tabFinderStackNavigator,
  Postings: tabPostingsStackNavigator,
  More: tabMoreStackNavigator
};

//TODO: Create drawer stack navigators
