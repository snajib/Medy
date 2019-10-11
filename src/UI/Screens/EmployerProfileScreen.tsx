import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text } from "react-native";
import { styles } from "../Shared/styles";
import { Accordion } from "../Shared/Accordion/accordion";
import { ScrollView } from "react-native-gesture-handler";
import { profileOptions } from "../Shared/Accordion/accordion-schemas"

export class EmployerProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient></Gradient>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Profile</Text>
          <View style={styles.wholeDefaultCardStyle}>
            <ScrollView>
              <Accordion schema={profileOptions}></Accordion>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
