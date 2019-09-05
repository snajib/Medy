import { StyleSheet, ViewStyle, Dimensions } from "react-native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

const topContainterStyle: ViewStyle = {
  flex: 1,
  backgroundColor: "#5F44BA",
  alignItems: "center"
};

const centerText: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
};

const finderDefaultCardStyle: ViewStyle = {
  backgroundColor: "#fff",
  borderRadius: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  marginTop: 100,
  marginLeft: 10,
  marginRight: 10,
  height: height - 300,
  width: width - 100
};

const homeSandwichCardStyle: ViewStyle = {
  backgroundColor: "#fff",
  borderRadius: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  height: height - 450,
  width: width - 100,
  marginBottom: 40
};

export const styles = StyleSheet.create({
  topContainterStyle,
  finderDefaultCardStyle,
  centerText,
  homeSandwichCardStyle
});
