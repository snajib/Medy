import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";

export class EmployerHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <LinearGradient
          colors={["rgba(86,141,230,1)", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 1200
          }}
        />
        <View style={styles.cardStyle}>
          <View style={styles.centerText}>
            <Text>Home</Text>
          </View>
        </View>
      </View>
    );
  }
}

const containerStyle: ViewStyle = {
  flex: 1,
  backgroundColor: "#5F44BA",
  alignItems: "center",
  justifyContent: "center"
};

const centerText: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
};

const cardStyle: ViewStyle = {
  backgroundColor: "#fff",
  borderRadius: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  height: "70%",
  width: "67%"
};

const linearGradient: ViewStyle = {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
};

const styles = StyleSheet.create({
  containerStyle,
  cardStyle,
  linearGradient,
  centerText
});

/*TODO: Find a way to create a stack for each screen
   Anything that transitions from the original page of the tab to a separate
   page within the original page of a tab requires a stack

   Exs. 
      Super list inside of Findings tab
      View posting inquiries inside of Postings tab
      View employee cards or QR codes from Calender tab
      View other options in the more tab (micro transactions)
*/

