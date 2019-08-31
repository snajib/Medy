import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { EmployerPostingsScreen } from "./Screens/EmployerPostingsScreen";
import { EmployerMoreScreen } from "./Screens/EmployerMoreScreen";
import { EmployerFinderScreen } from "./Screens/EmployerFinderScreen";
import { EmployerHomeScreen } from "./Screens/EmployerHomeScreen";
import { EmployerAccountScreen } from "./Screens/EmployerAccountScreen";
import { EmployerProfileScreen } from "./Screens/EmployerProfileScreen";
import { EmployerSettingsScreen } from "./Screens/EmployerSettingsScreen";
import { EmployerHistoryScreen } from "./Screens/EmployerHistoryScreen";
import { EmployerHelpScreen } from "./Screens/EmployerHelpScreen";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;

  if (routeName === "Home") {
    iconName = "ios-home";
  } else if (routeName === "Postings") {
    iconName = "ios-clipboard";
  } else if (routeName === "Finder") {
    iconName = "ios-search";
  } else if (routeName === "More") {
    iconName = "ios-more";
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: EmployerHomeScreen },
    Finder: { screen: EmployerFinderScreen },
    Postings: { screen: EmployerPostingsScreen },
    More: { screen: EmployerMoreScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),

    tabBarOptions: {
      style: {
        height: 60,
        paddingTop: 10
      },
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: { screen: TabNavigator },
  Profile: { screen: EmployerProfileScreen },
  Account: { screen: EmployerAccountScreen },
  History: { screen: EmployerHistoryScreen },
  Settings: { screen: EmployerSettingsScreen },
  Help: { screen: EmployerHelpScreen }
});

const AppContainer = createAppContainer(DrawerNavigator);

export { AppContainer };
