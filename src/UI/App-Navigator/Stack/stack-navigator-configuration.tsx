import { createStackNavigator } from 'react-navigation';
import {
    EmployerHomeScreen,
    EmployerFinderScreen,
    EmployerPostingsScreen,
    EmployerCalenderScreen,
    EmployerMoreScreen,
    EmployerProfileScreen,
    EmployerAccountScreen,
    EmployerHistoryScreen,
    EmployerSettingsScreen,
    EmployerHelpScreen
} from "../../Screens"
import {
    names,
    screenNames
} from "../route-config"

//Automating process for generating screen names and their routes
const screenRoutes = (routeName, screen) => ({
    [screenNames(routeName)]: { screen }
});

//Automating process for generating stacks, their screen routes, and their options
/* 
    We can add more things like props later on as variables in this section
    Each stack is created with its own route names and initialRoutes. We 
    do this to reduce redundancy. If we need to change a fundamental ascpect
    of all the stacks in the tab navigator, change it here

*/
const tabStackNavigator = (route, initialRouteName) =>
    createStackNavigator(
        route,
        { initialRouteName }
    );

//TODO: Create one for Drawer

//Creating routes (i.e. screen names) for the tab stack navigators
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
const homeStackRoutes = 
    screenRoutes(names.EmployerHome, EmployerHomeScreen);
const finderStackRoutes =
    screenRoutes(names.EmployerFinder, EmployerFinderScreen);
const postingsStackRoutes =
    screenRoutes(names.EmployerPostings, EmployerPostingsScreen);
const moreStackRoutes =
    screenRoutes(names.EmployerMore, EmployerMoreScreen);

//Creating tab stack navigators 
const tabHomeStackNavigator = 
    tabStackNavigator(homeStackRoutes, screenNames(names.EmployerHome));
const tabFinderStackNavigator =
    tabStackNavigator(finderStackRoutes, screenNames(names.EmployerFinder));
const tabPostingsStackNavigator =
    tabStackNavigator(postingsStackRoutes,screenNames(names.EmployerPostings));
const tabMoreStackNavigator =
    tabStackNavigator(moreStackRoutes, screenNames(names.EmployerMore));

//Creating main variable for holding all stacks, used directly in tab navigator
export const tabStack = {
    Home: tabHomeStackNavigator,
    Finder: tabFinderStackNavigator,
    Postings: tabPostingsStackNavigator,
    More: tabMoreStackNavigator
}
//TODO: Create drawer stack navigators