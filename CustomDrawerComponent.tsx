import React from "react";
import { DrawerItems, DrawerItemsProps } from "react-navigation";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";

export class CustomDrawerComponent extends React.Component<DrawerItemsProps> {
  public handleNavigate = () => () => {
    this.props.navigation.navigate("Profile");
    return;
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity onPress={this.handleNavigate()}>
              <Image
                source={require("./assets/ProfilePic.png")}
                style={styles.profileImageStyle}
              />
              <View>
                <Text> Name </Text>
                <Text> Job </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBottom}>
            <DrawerItems {...this.props} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  containertopRow: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  txtBottom: {
    marginLeft: 10,
    color: "#000000",
    fontSize: 15,
    fontWeight: "100"
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  containertopRowText: {
    flexDirection: "column",
    marginLeft: 5
  },

  containerBottom: {
    backgroundColor: "#ffffff"
  },
  containerBottomItem: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5
  },
  profileImageStyle: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  profileImageContainer: {
    flexDirection: "row",
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
