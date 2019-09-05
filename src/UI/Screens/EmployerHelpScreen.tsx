import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text } from "react-native";
import { styles } from "../Shared/styles";

export class EmployerHelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.topContainterStyle}>
        <Gradient></Gradient>
        <View style={styles.finderDefaultCardStyle}>
          <View style={styles.centerText}>
            <Text> Help </Text>
          </View>
        </View>
      </View>
    );
  }
}
