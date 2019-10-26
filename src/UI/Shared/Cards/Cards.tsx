import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from '../styles';

interface ICardsProps {
  style?: StyleProp<ViewStyle>;
  profileName?: string;
  summary?: string;
  key?: string;
}

export class Cards extends React.Component<ICardsProps> {
  render() {
    return (
      <View key={this.props.key} style={this.props.style}>
        <View style={styles.centerText}>
          <Text>{this.props.profileName}</Text>
          <Text>{this.props.summary}</Text>
        </View>
      </View>
    );
  }
}
