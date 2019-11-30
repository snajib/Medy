import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export interface IHomeProps {
  name: string;
}

export class HomeCard extends React.Component<IHomeProps> {
  public render() {
    return (
      <View style={styles.homeCardStyle}>
        <Text style={styles.centerText}>{this.props.name}</Text>
      </View>
    );
  }
}
