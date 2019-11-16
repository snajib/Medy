import React from "react";
import { AppContainer } from "./src/UI/App-Navigator/Drawer/drawer-navigator-configuration";
import { Provider } from "react-redux";
// import { buildAppStore } from './store/store';
import { rootReducer } from "./store/root-reducer";
import { createStore } from "redux";

// const AppContainer = createAppContainer(AppNavigator);

// const store = buildAppStore();

const store = createStore(rootReducer);

export default class App extends React.Component {
  //   someEvent() {
  //     // call navigate for AppNavigator here:
  //     this.navigator &&
  //       this.navigator.dispatch(
  //         NavigationActions.navigate({ routeName: someRouteName }),
  //       );
  //   }
  public render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
