import {
  MenuButton,
  SandwichButton,
  RegularButton,
} from '../Components/menu-button';
import { NavigationComponent } from 'react-navigation';

export const stackNavigatorOptions = {
  navigationOptions: ({ navigation }: NavigationComponent) => ({
    headerLeft: MenuButton(navigation),
    headerTransparent: 'true',
  }),
};

export const finderRegularStackNavigatorOptions = {
  navigationOptions: ({ navigation }: NavigationComponent) => ({
    headerLeft: MenuButton(navigation),
    headerRight: RegularButton(navigation),
    headerTransparent: 'true',
  }),
};

export const finderSandwichStackNavigatorOptions = {
  navigationOptions: ({ navigation }: NavigationComponent) => ({
    headerLeft: MenuButton(navigation),
    headerRight: SandwichButton(navigation),
    headerTransparent: 'true',
  }),
};
