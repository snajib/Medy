import { AppContainer } from './src/UI/App-Navigator/Drawer/drawer-navigator-configuration';
import React from 'react';

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  //   someEvent() {
  //     // call navigate for AppNavigator here:
  //     this.navigator &&
  //       this.navigator.dispatch(
  //         NavigationActions.navigate({ routeName: someRouteName }),
  //       );
  //   }
  render() {
    return <AppContainer />;
  }
}
