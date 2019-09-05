import React from "react";
import { ScrollView, View, Text } from "react-native";
import { width, styles } from "./styles";

const profileList = ["Profile 1", "Profile 2", "Profile 3", "Profile 4"];

export class HorizontalScroll extends React.Component {
  public renderCards: () => React.ReactNode = () => {
    return profileList.map(profile => {
      return (
        <View key={profile} style={styles.finderDefaultCardStyle}>
          <View style={styles.centerText}>
            <Text>{profile}</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width - 80}
          snapToAlignment={"start"}
          centerContent={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 10,
            marginRight: 10
          }}
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 50
          }}
        >
          <View style={{ width: 30 }} />
          {this.renderCards()}
        </ScrollView>
      </>
    );
  }
}
