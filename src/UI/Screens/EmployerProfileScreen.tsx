import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../Shared/styles';
import { Accordion } from '../Shared/Accordion/accordion';
import { profileOptions } from '../Shared/Accordion/accordion-schemas';

export class EmployerProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
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
