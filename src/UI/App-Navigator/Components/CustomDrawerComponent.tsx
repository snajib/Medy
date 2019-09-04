import React from "react";
import { DrawerItems, DrawerItemsProps } from "react-navigation";
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet,
   SafeAreaView,
   ViewStyle,
   ImageStyle
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
                        source={require("../../../../assets/ProfilePic.png")}
                        style={styles.profileImageStyle}
                     />
                     <View style={styles.textProfile}>
                        <Text style={{ fontWeight: "bold" }}> Name </Text>
                        <Text> Job </Text>
                     </View>
                  </TouchableOpacity>
               </View>
               <View style={{ backgroundColor: "white" }}>
                  <DrawerItems {...this.props} />
                  {/*
          <TouchableOpacity
            onPress={() => navigate('TabNavigator')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Home</Text>
            </View>
          </TouchableOpacity>
    
          <TouchableOpacity
            onPress={() => navigate('EmployerAccountScreen')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('EmployerHistoryScreen')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>History</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('EmployerSettingsScreen')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Settings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('EmployerHelpScreen')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.textBottom}>Help</Text>
            </View>
          </TouchableOpacity>
          */}
               </View>
            </View>
         </SafeAreaView>
      );
   }
}

const container: ViewStyle = {
   flex: 1,
   backgroundColor: "#ffffff"
};

const profileImageContainer: ViewStyle = {
   display: "flex",
   flexDirection: "row",
   height: 150,
   backgroundColor: "white",
   alignItems: "flex-start",
   justifyContent: "flex-start"
};

const profileImageStyle: ImageStyle = {
   alignSelf: "flex-start",
   flex: 1,
   height: 120,
   width: 120,
   borderRadius: 60,
   paddingTop: 75,
   marginLeft: 20
};

const textProfile: ImageStyle = {
   alignSelf: "flex-end",
   flex: 2,
   marginLeft: 150,
   marginTop: -75
};

const styles = StyleSheet.create({
   container,
   profileImageContainer,
   profileImageStyle,
   textProfile
});
