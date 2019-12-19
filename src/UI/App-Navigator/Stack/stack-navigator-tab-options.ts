import {
  MenuButton,
  SandwichButton,
  RegularButton,
  SuperListButton,
  ExitSuperListButton,
} from '../Components/Menu-Button';
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
    headerTitle: SuperListButton(navigation),
    headerRight: SandwichButton(navigation),
    headerTransparent: 'true',
  }),
};

export const finderSuperListStackNavigatorOptions = {
  navigationOptions: ({ navigation }: NavigationComponent) => ({
    headerLeft: null as any,
    headerRight: ExitSuperListButton(navigation),
    headerTransparent: 'true',
  }),
};
