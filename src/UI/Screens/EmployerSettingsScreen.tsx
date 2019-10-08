import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../Shared/styles";
import { settingsOptions } from "../Shared/accordion-schemas";
import { Accordion } from "../Shared/accordion";

export class EmployerSettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient></Gradient>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Settings</Text>
          <View style={styles.wholeDefaultCardStyle}>
            <ScrollView>
              <Accordion schema={settingsOptions}></Accordion>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
