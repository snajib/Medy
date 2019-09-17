import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HeaderButton = (
  iconName: string,
  color: string,
  onPress: () => void,
) => (
  <Ionicons
    name={iconName}
    size={30}
    style={{ paddingHorizontal: 15, color }}
    onPress={onPress}
  />
);

export const MenuButton = navigation =>
  HeaderButton('ios-menu', 'white', () => navigation.openDrawer());
