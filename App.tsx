import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

export default function App() {
   return (
      <View style={styles.containerStyle}>
         <View style={styles.cardStyle} />
      </View>
   );
}

const containerStyle: ViewStyle = {
   flex: 1,
   backgroundColor: "#6296E8",
   alignItems: "center",
   justifyContent: "center"
};

const textStyle: TextStyle = {
   color: "red"
};

const cardStyle: ViewStyle = {
   backgroundColor: "#fff",
   borderRadius: 12,
   shadowColor: "#000",
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity: 0.8,
   shadowRadius: 3,
   height: "70%",
   width: "65%"
};
const styles = StyleSheet.create({
   containerStyle,
   cardStyle,
   textStyle
});
