import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export class Gradient extends React.Component {
   render() {
      return (
         <LinearGradient
            colors={["rgba(86,141,230,1)", "transparent"]}
            style={{
               position: "absolute",
               left: 0,
               right: 0,
               top: 0,
               height: 1200
            }}
         />
      );
   }
}
