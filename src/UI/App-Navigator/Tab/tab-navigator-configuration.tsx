import { createBottomTabNavigator } from 'react-navigation';
import { tabBarOptions } from './tab-navigator-options';
import { tabStack } from '../Stack/stack-navigator-configuration';

const drawConfig = { ...tabBarOptions, initialRouteName: 'Home' };

export const TabNavigator = createBottomTabNavigator(
  tabStack,
  ...(drawConfig as any),
);
