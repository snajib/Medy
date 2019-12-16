import React from 'react';
import {
  View,
  Text,
  Image,
  ImageURISource,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export interface IHomeProps {
  name: string;
}

export enum HomeCardTypes {
  FINDER_DEFAULT_CARD_STYLE = 'homeCalendarCardStyle',
  FINDER_SANDWICH_CARD_STYLE = 'homePastCardStyle',
}

export interface IProfilePictureProps {
  profilePictureUri: ImageURISource;
}

class ProfilePicture extends React.Component<IProfilePictureProps> {
  public render() {
    return (
      <Image
        style={{
          height: 150,
          width: 150,
          borderWidth: 8,
          borderColor: 'white',
          borderRadius: 75,
          alignSelf: 'flex-start',
        }}
        source={this.props.profilePictureUri}
      />
    );
  }
}

export class HomeCard extends React.Component<IHomeProps> {
  public renderCalendarCard = () => {};

  public render() {
    return (
      <View style={homeCardStyles.homeCardStyle}>
        <Text style={styles.centerText}>{this.props.name}</Text>
      </View>
    );
  }
}

const homeCardStyle: ViewStyle = {
  backgroundColor: '#fff',
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  height: '100%',
  width: '100%',
  marginBottom: 40,
};

export const homeCardStyles = StyleSheet.create({
  homeCardStyle,
});
