import React from "react";
import renderer from "react-test-renderer";
import { EmployerProfileScreen } from "../EmployerProfileScreen";
import { View, Text } from "react-native";

describe("EmployerAccountScreen", () => {
   it("should render header correctly", () => {
      const profileScreen = renderer.create(<EmployerProfileScreen />);

      expect(profileScreen.root.findAllByType(Text).length).toBe(1);
      expect(profileScreen.root.findAllByType(Text)[0].props.children).toBe(
         "Profile"
      );
   });

   it("should render views correctly", () => {
      const profileScreen = renderer.create(<EmployerProfileScreen />);

      expect(profileScreen.root.findAllByType(View).length).toBe(3);
   });

   it("should render with snapshot", () => {
      const employerProfScreen = renderer.create(<EmployerProfileScreen />);
      expect(employerProfScreen.toJSON()).toMatchSnapshot();
   });
});
