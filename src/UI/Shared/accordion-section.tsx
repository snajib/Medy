import React from "react";
import { View, TouchableOpacity, Text, ViewStyle, StyleProp, TextStyle } from "react-native";
import { styles } from "./styles";

interface Props {
    title: string;
    topContainer?: StyleProp<ViewStyle>
    labelText?: StyleProp<TextStyle>
    content?: StyleProp<ViewStyle>
}

interface State {
    active: boolean;
}

export class AccordionSection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    handleClick = () => () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <View style={this.props.topContainer}>
                <TouchableOpacity onPress={this.handleClick()}>
                    <Text style={this.props.labelText}>{this.props.title}</Text>
                </TouchableOpacity>
                <View style={this.state.active ? styles.sectionActive : styles.sectionInActive}>
                    <View>{this.props.children}</View>
                </View>
            </View>
        )
    }
}
//active ? styles.active : styles.inActive
//<Text>{this.props.children}</Text>