import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";

export interface ICardProps {
  style?: StyleProp<ViewStyle>;
  profileName?: string;
  summary?: string;
  key: string;
}

export class Card extends React.Component<ICardProps> {
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
