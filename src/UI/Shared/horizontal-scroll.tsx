import React from "react";
import { ScrollView, View, StyleProp, ViewStyle } from "react-native";
import { width } from "./styles";
import { Cards } from "./Cards/Cards";

interface Props {
  style: StyleProp<ViewStyle>
  schema?: string[]
}
export class HorizontalScroll extends React.Component<Props> {
  public renderCards(profileList: string[]) {
    return profileList.map(profile => {
      return (
        <Cards
          style={this.props.style}
          profileName={profile}>
        </Cards>
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
          {this.renderCards(this.props.schema)}
        </ScrollView>
      </>
    );
  }
}
