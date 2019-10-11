import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../Shared/styles";
import { Accordion } from "../Shared/Accordion/accordion";
import { accountOptions } from "../Shared/Accordion/accordion-schemas";

export class EmployerAccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient></Gradient>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Account</Text>
          <View style={styles.wholeDefaultCardStyle}>
            <ScrollView>
              <Accordion schema={accountOptions}></Accordion>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
