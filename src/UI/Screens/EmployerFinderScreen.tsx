import React from 'react';
import { View } from 'react-native';
import { styles } from '../Shared/styles';
import { HorizontalScroll } from '../Shared/horizontal-scroll';

export class EmployerFinderScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <HorizontalScroll />
      </View>
    );
  }
}
