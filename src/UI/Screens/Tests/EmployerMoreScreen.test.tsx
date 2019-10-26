import React from "react";
import renderer from "react-test-renderer";
import { EmployerMoreScreen } from "../EmployerMoreScreen";
import { View, Text } from "react-native";

describe("EmployerAccountScreen", () => {
   it("should render header correctly", () => {
      const moreScreen = renderer.create(<EmployerMoreScreen />);

      expect(moreScreen.root.findAllByType(Text).length).toBe(1);
      expect(moreScreen.root.findAllByType(Text)[0].props.children).toBe(
         "More"
      );
   });

   it("should render views correctly", () => {
      const moreScreen = renderer.create(<EmployerMoreScreen />);

      expect(moreScreen.root.findAllByType(View).length).toBe(3);
   });

   it("should render with snapshot", () => {
      const employerMoreScreen = renderer.create(<EmployerMoreScreen />);
      expect(employerMoreScreen.toJSON()).toMatchSnapshot();
   });
});
