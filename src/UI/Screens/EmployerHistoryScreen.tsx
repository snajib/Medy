import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../Shared/styles';
import { Accordion } from '../Shared/Accordion/accordion';
import { historyOptions } from '../Shared/Accordion/accordion-schemas';

export class EmployerHistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
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
