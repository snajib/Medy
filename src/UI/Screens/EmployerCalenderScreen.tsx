import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Shared/styles';

export class EmployerCalenderScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Calender</Text>
          <View style={styles.wholeDefaultCardStyle}></View>
        </View>
      </View>
    );
  }
}
