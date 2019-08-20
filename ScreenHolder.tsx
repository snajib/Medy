import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { EmployerPostingsScreen } from "./EmployerPostingsScreen";
import { EmployeeCalenderScreen } from "./EmployeeCalenderScreen";
import { EmployeeMoreScreen } from "./EmployeeMoreScreen";
import { EmployerFinderScreen } from "./EmployerFinderScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: EmployerFinderScreen },
    Postings: { screen: EmployerPostingsScreen },
    Calender: { screen: EmployeeCalenderScreen },
    More: { screen: EmployeeMoreScreen }
  },
  {
    tabBarOptions: {
      style: { paddingBottom: 10, height: 70 }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export { AppContainer };
