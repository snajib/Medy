import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

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

export const tabBarOptions = {
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