import React from "react";
import { Gradient } from "../Shared/linear-gradient";
import { View } from "react-native";
import { styles } from "../Shared/styles";
import { VerticalScroll } from "../Shared/vertical-scroll";

export class EmployerFinderSandwichScreen extends React.Component {
    render() {
        return (
            <View style={styles.topPrimaryContainterStyle}>
                <Gradient />
                <VerticalScroll />
            </View>
        );
    }
}