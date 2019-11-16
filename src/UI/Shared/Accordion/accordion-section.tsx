import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { styles } from '../styles';

interface IAccordionSectionProps {
  active: boolean;
  title: string;
  topContainer?: StyleProp<ViewStyle>;
  labelText?: StyleProp<TextStyle>;
  content?: StyleProp<ViewStyle>;
  onClick: (active: boolean) => void;
}

interface IAccordionSectionState {
  active: boolean;
}

export class AccordionSection extends React.Component<
  IAccordionSectionProps,
  IAccordionSectionState
> {
  constructor(props: IAccordionSectionProps) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = () => () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <View style={this.props.topContainer}>
        <TouchableOpacity onPress={this.handleClick()}>
          <Text style={this.props.labelText}>{this.props.title}</Text>
        </TouchableOpacity>
        <View
          style={
            this.state.active ? styles.sectionActive : styles.sectionInActive
          }
        >
          <View>{this.props.children}</View>
        </View>
      </View>
    );
  }
}
