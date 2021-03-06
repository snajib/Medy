import React from 'react';
import { View } from 'react-native';
import { styles, deviceHeight } from '../Shared/styles';
import { VerticalScroll } from '../Shared/vertical-scroll';

export class EmployerHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.topPrimaryContainterStyle}>
        <VerticalScroll
          style='homeCardStyle'
          homeList={[
            { name: 'Home' },
            { name: 'Statistics' },
            { name: 'Performance' },
          ]}
          snapToInterval={deviceHeight - 500}
        />
      </View>
    );
  }
}

/*TODO: Find a way to create a stack for each screen
   Anything that transitions from the original page of the tab to a separate
   page within the original page of a tab requires a stack

   Exs.
      Super list inside of Findings tab
      View posting inquiries inside of Postings tab
      View employee cards or QR codes from Calender tab
      View other options in the more tab (micro transactions)
*/
