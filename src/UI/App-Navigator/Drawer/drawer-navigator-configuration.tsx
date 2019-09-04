import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { CustomDrawerComponent } from "../Components/CustomDrawerComponent";
import { TabNavigator } from "../Tab/tab-navigator-configuration";
import {
   employerDrawerAccountStackNavigator,
   employerDrawerProfileStackNavigator,
   employerDrawerHistoryStackNavigator,
   employerDrawerSettingsStackNavigator,
   employerDrawerHelpStackNavigator
} from "../Stack/stack-navigator-configuration";

const DrawerNavigator = createDrawerNavigator(
   {
      Home: TabNavigator,
      Profile: employerDrawerProfileStackNavigator,
      Account: employerDrawerAccountStackNavigator,
      History: employerDrawerHistoryStackNavigator,
      Settings: employerDrawerSettingsStackNavigator,
      Help: employerDrawerHelpStackNavigator
   },
   {
      contentComponent: props => <CustomDrawerComponent {...props} />
   }
);

export const AppContainer = createAppContainer(DrawerNavigator);
