import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;

  switch (routeName) {
    case "Home":
      iconName = "ios-home";
      break;
    case "Postings":
      iconName = "ios-clipboard";
      break;
    case "Finder":
      iconName = "ios-search";
      break;
    case "More":
      iconName = "ios-more";
      break;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export const tabBarOptions = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor)
  }),

  tabBarOptions: {
    style: { paddingBottom: 10, height: 70 },
    activeTintColor: "black",
    inactiveTintColor: "gray"
  }
};
