import { MenuButton } from '../Components/Menu-Button';
import { NavigationComponent } from 'react-navigation';

export const stackNavigatorOptions = {
  navigationOptions: (navigation: NavigationComponent) => ({
    headerLeft: MenuButton(navigation),
    headerTransparent: 'true',
  }),
};
