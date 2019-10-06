import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text } from "react-native";
import { styles } from "../Shared/styles";

export class EmployerPostingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient></Gradient>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Postings</Text>
          <View style={styles.wholeDefaultCardStyle}>
          </View>
        </View>
      </View>
    );
  }
}
