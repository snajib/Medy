import React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';
import renderer from 'react-test-renderer';
// import { AppContainer } from './src/UI/App-Navigator/Drawer/drawer-navigator-configuration';
import App from './App';

// jest.mock('react-native-router-flux', () => ({
//   ActionConst: {},
//   Actions: {
//     pop: jest.fn(),
//   },
// }));
// jest.mock(
//   'prescryptive-ux-common/lib/experiences/sample-experience/sample-experience',
//   () => ({
//     SampleExperience: (props: {}) => {
//       return <div title='mock-sample-experience'>{JSON.stringify(props)}</div>;
//     },
//   }),
// );

// it('it renders with snapshot', () => {
//   const app = renderer.create(<App />);
//   expect(app.toJSON()).toMatchSnapshot();
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('should render with snapshot', () => {
  const app = renderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
});
