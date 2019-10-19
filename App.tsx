import React from 'react';
import { AppContainer } from './src/UI/App-Navigator/Drawer/drawer-navigator-configuration';

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  //   someEvent() {
  //     // call navigate for AppNavigator here:
  //     this.navigator &&
  //       this.navigator.dispatch(
  //         NavigationActions.navigate({ routeName: someRouteName }),
  //       );
  //   }
  public render() {
    return <AppContainer />;
  }
}
