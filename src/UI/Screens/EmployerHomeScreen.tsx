import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text } from "react-native";
import { styles } from "../Shared/styles";

export class EmployerHomeScreen extends React.Component {
   render() {
      return (
         <View style={styles.topContainterStyle}>
            <Gradient></Gradient>
            <View style={styles.mainCardStyle}>
               <View style={styles.centerText}>
                  <Text> Home </Text>
               </View>
            </View>
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
