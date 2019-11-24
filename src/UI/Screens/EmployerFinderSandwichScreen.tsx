import React from 'react';
import { View } from 'react-native';
import { styles } from '../Shared/styles';
import { VerticalScroll } from '../Shared/vertical-scroll';

export class EmployerFinderSandwichScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <VerticalScroll
          style='finderSandwichCardStyle'
          schema={[
            'Profile 1',
            'Profile 2',
            'Profile 3',
            'Profile 4',
            'Profile 5',
            'Profile 6',
          ]}
          snapToInterval={0}
        />
      </View>
    );
  }
}
