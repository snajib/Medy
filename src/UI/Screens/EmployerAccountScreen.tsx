import React from 'react';
import { Gradient } from '../Shared/linear-gradient';
import { View, Text } from 'react-native';
import { styles } from '../Shared/styles';

export class EmployerAccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient />
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Account</Text>
          <View style={styles.wholeDefaultCardStyle} />
        </View>
      </View>
    );
  }
}
