import { createBottomTabNavigator } from 'react-navigation';
import { tabBarOptions } from './tab-navigator-options';
import { tabStack } from '../Stack/stack-navigator-configuration';

export const TabNavigator = createBottomTabNavigator(tabStack, {
  initialRouteName: 'Home',
  ...tabBarOptions,
});
