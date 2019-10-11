import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View } from "react-native";
import { styles } from "../Shared/styles";
import { HorizontalScroll } from "../Shared/horizontal-scroll";

export class EmployerFinderScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient />
        <HorizontalScroll
          style={styles.finderDefaultCardStyle}
          schema={["Profile 1", "Profile 2", "Profile 3", "Profile 4", "Profile 5"]} />
      </View>
    );
  }
}
