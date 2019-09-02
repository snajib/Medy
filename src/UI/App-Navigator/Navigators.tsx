import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems,
  NavigationEvents
} from "react-navigation";
import {
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { EmployerPostingsScreen } from "../Screens/EmployerPostingsScreen";
import { EmployerMoreScreen } from "../Screens/EmployerMoreScreen";
import { EmployerFinderScreen } from "../Screens/EmployerFinderScreen";
import { EmployerHomeScreen } from "../Screens/EmployerHomeScreen";
import { EmployerAccountScreen } from "../Screens/EmployerAccountScreen";
import { EmployerProfileScreen } from "../Screens/EmployerProfileScreen";
import { EmployerSettingsScreen } from "../Screens/EmployerSettingsScreen";
import { EmployerHistoryScreen } from "../Screens/EmployerHistoryScreen";
import { EmployerHelpScreen } from "../Screens/EmployerHelpScreen";
import { CustomDrawerComponent } from "../../../CustomDrawerComponent";
import { TabNavigator } from "./Tab/tab-navigator-configuration";

/* EXPLANATION FOR SAMMY
  This stack is used in the DrawerNavigator to help render the Profile Screen. The only way for a touchOpacity tag 
  to navigate to a different screen is if the touchOpacity is referring to something in a stack. In the CustomDrawerComponent
  js file on line 35 it is directly linking EmployerProfileScreen from the DrawerStackNavigator in this file. But this file is used
  as a custom component under contentComponent in the DrawerNavigator in this file. 

  There are two versions of this:
    1: The version that is with the commented out lines. This version doesnt add everything in the stack, instead uses 
    the DrawerItems tag on line 44 to create each individual menu item in drawer. This is what is currently rendered in expo if 
    you pull from this branch and dont make any changes

    2: Uncomment everything from line 92 to 98 in this file and 45 to 90 in CustomDrawerComponent.js file. This is creating
    each menu item by hand using touchOpacity and it outlines even further how using the stack (DrawerStackNavigator) is needed
    for the touchOpacity buttons.

  I think version one is what we want more since we want to be able to pull the drawer when we are on the screens that we get to 
  through the drawer. But im not sure if its bad coding practice yet for what i've done for version one. 
*/
const DrawerStackNavigator = createStackNavigator({
  /*
  TabNavigator,
  EmployerAccountScreen,
  EmployerHistoryScreen,
  EmployerSettingsScreen,
  EmployerHelpScreen,
  */
  EmployerProfileScreen
});

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: TabNavigator },
    Account: { screen: EmployerAccountScreen },
    History: { screen: EmployerHistoryScreen },
    Settings: { screen: EmployerSettingsScreen },
    Help: { screen: EmployerHelpScreen },
    DrawerStackNavigator
  },
  {
    contentComponent: props => <CustomDrawerComponent {...props} />
  }
);

const ProfileImageStyle: ImageStyle = {
  height: 120,
  width: 120,
  borderRadius: 60
};

const ProfileImageContainer: ViewStyle = {
  flexDirection: "row",
  height: 150,
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center"
};

const styles = StyleSheet.create({
  ProfileImageContainer,
  ProfileImageStyle
});

const AppContainer = createAppContainer(DrawerNavigator);

export { AppContainer };
