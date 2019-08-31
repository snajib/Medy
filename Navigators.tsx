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
} from 'react-native';
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


const customeDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={styles.ProfileImageContainer}>
      <TouchableOpacity onPress={() => props.navigation.navigate('EmployerProfileScreen')}>
        <Image source={require('./assets/ProfilePic.png')} style={styles.ProfileImageStyle} />
        <View>
          <Text> Name </Text>        
          <Text> Job </Text>
        </View>
      </TouchableOpacity>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: EmployerHomeScreen },
    Finder: { screen: EmployerFinderScreen },
    Postings: { screen: EmployerPostingsScreen },
    More: { screen: EmployerMoreScreen }
  },
  {

    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    
    tabBarOptions: {
      style: { paddingBottom: 10, height: 70 },
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: { 
    screen: TabNavigator},
  Account: { screen: EmployerAccountScreen },
  History: { screen: EmployerHistoryScreen },
  Settings: { screen: EmployerSettingsScreen },
  Help: { screen: EmployerHelpScreen }
}, {
  contentComponent: customeDrawerComponent
});

const ProfileImageStyle: ImageStyle = {
  height: 120,
  width: 120, 
  borderRadius: 60
}

const ProfileImageContainer: ViewStyle = {
  flexDirection: 'row',
  height: 150, 
  backgroundColor: 'white', 
  alignItems: 'center',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  ProfileImageContainer,
  ProfileImageStyle
});

const AppContainer = createAppContainer(DrawerNavigator);

export { AppContainer };
