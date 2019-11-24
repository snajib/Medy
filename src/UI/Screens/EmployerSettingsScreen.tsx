import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../Shared/styles';
import { settingsOptions } from '../Shared/Accordion/accordion-schemas';
import { Accordion } from '../Shared/Accordion/accordion';

export class EmployerSettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <View style={styles.topSecondaryContainerStyle}>
          <Text style={styles.titleText}>Settings</Text>
          <View style={styles.wholeDefaultCardStyle}>
            <ScrollView>
              <Accordion schema={settingsOptions} />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
