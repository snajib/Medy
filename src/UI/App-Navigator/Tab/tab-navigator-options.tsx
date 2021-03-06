import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationComponent } from 'react-navigation';

const getTabBarIcon = (navigation: NavigationComponent, tintColor: string) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = 'ios-home';
      break;
    case 'Postings':
      iconName = 'ios-clipboard';
      break;
    case 'Finder':
      iconName = 'ios-search';
      break;
    case 'More':
      iconName = 'ios-more';
      break;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export const tabBarOptions = {
  defaultNavigationOptions: ({ navigation }: NavigationComponent) => ({
    tabBarIcon: ({ tintColor }: any) => getTabBarIcon(navigation, tintColor),
  }),

  tabBarOptions: {
    style: { paddingBottom: 10, height: 70 },
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },
};

/*
indicatorStyle: {
      backgroundColor: 'transparent',
    },
    style: {
      backgroundColor: 'rgb(128,128,128,0.5);', //rgba(0, 0, 1, 0.2)',
      borderTopWidth: 3,
      borderTopColor: 'transparent',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },*/
