import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

export interface ICardProps {
  style?: string;
  profilePicture?: string;
  profileName?: string;
  jobTitle?: string;
  rating?: string;
  summary?: string;
  experience?: string;
  key: string;
}

export class Card extends React.Component<ICardProps> {
  public renderSandwichCards = () => {
    return (
      <View key={this.props.key} style={styles.finderSandwichCardStyle}></View>
    );
  };

  public renderDefaultCards = () => {
    return (
      <View key={this.props.key} style={styles.finderDefaultCardStyle}>
        <View style={styles.centerText}>
          <Text>{this.props.profileName}</Text>
          <Text>{this.props.summary}</Text>
        </View>
      </View>
    );
  };

  public render() {
    switch (this.props.style) {
      case 'finderDefaultCardStyle':
        return this.renderDefaultCards();
      case 'finderSandwichCardStyle':
        return this.renderSandwichCards();
      default:
        return <View></View>;
    }
    // );
    // } else if (this.props.style == 'finderSandwichCardStyle') {
    //   return this.renderSandwichCards();
    // } else {
    // }
  }
}
