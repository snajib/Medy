import React from "react";
import { ScrollView, View, Text } from "react-native";
import { height, styles } from "./styles";

const cardList = ["Calender", "Past Employees", "Statistics"];

export class VerticalScroll extends React.Component {
  public renderCards: () => React.ReactNode = () => {
    return cardList.map(card => {
      return (
        <View style={styles.homeSandwichCardStyle}>
          <View style={styles.centerText}>
            <Text>{card}</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView
        horizontal={false}
        decelerationRate={0}
        snapToAlignment={"start"}
        snapToInterval={height - 500}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 80 }}
        contentInset={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 80
        }}
      >
        {this.renderCards()}
      </ScrollView>
    );
  }
}
