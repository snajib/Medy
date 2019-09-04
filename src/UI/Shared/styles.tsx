import { StyleSheet, ViewStyle } from "react-native";

const topContainterStyle: ViewStyle = {
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

const mainCardStyle: ViewStyle = {
   backgroundColor: "#fff",
   borderRadius: 12,
   shadowColor: "#000",
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity: 0.8,
   shadowRadius: 3,
   height: "70%",
   width: "67%"
};

export const styles = StyleSheet.create({
   topContainterStyle,
   mainCardStyle,
   centerText
});
