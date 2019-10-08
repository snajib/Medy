import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../Shared/styles";
import { Accordion } from "../Shared/accordion";
import { historyOptions } from "../Shared/accordion-schemas";

export class EmployerHistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <Gradient></Gradient>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>History</Text>
          <View style={styles.wholeDefaultCardStyle}>
            <ScrollView>
              <Accordion schema={historyOptions}></Accordion>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
