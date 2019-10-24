import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Shared/styles';

export class EmployerHelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Help</Text>
          <View style={styles.wholeDefaultCardStyle}></View>
        </View>
      </View>
    );
  }
}
