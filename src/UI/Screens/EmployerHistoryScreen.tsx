import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View, Text } from "react-native";
import { styles } from "../Shared/styles";

export class EmployerHistoryScreen extends React.Component {
   render() {
      return (
         <View style={styles.topContainterStyle}>
            <Gradient></Gradient>
            <View style={styles.mainCardStyle}>
               <View style={styles.centerText}>
                  <Text> History </Text>
               </View>
            </View>
         </View>
      );
   }
}
