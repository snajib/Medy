import React from "react";
import renderer from "react-test-renderer";
import { EmployerPostingsScreen } from "../EmployerPostingsScreen";
import { View, Text } from "react-native";

describe("EmployerAccountScreen", () => {
   it("should render header correctly", () => {
      const postingsScreen = renderer.create(<EmployerPostingsScreen />);

      expect(postingsScreen.root.findAllByType(Text).length).toBe(1);
      expect(postingsScreen.root.findAllByType(Text)[0].props.children).toBe(
         "Postings"
      );
   });

   it("should render views correctly", () => {
      const postingsScreen = renderer.create(<EmployerPostingsScreen />);

      expect(postingsScreen.root.findAllByType(View).length).toBe(3);
   });

   it("should render with snapshot", () => {
      const employerPostScreen = renderer.create(<EmployerPostingsScreen />);
      expect(employerPostScreen.toJSON()).toMatchSnapshot();
   });
});
