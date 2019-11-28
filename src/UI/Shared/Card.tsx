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

export interface ICardProps {
  style?: string;
  profilePicture?: ImageURISource;
  profileName?: string;
  jobTitle?: string;
  rating?: number;
  summary?: string;
  experience?: string;
  key: string;
}

export enum ProfileCardTypes {
  FINDER_DEFAULT_CARD_STYLE = 'finderDefaultCardStyle',
  FINDER_SANDWICH_CARD_STYLE = 'finderSandwichCardStyle',
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
          borderWidth: 10,
          borderColor: 'white',
          borderRadius: 75,
          marginTop: -50,
          marginLeft: 15,
          alignSelf: 'flex-start',
        }}
        source={this.props.profilePictureUri}
      />
    );
  }
}

class RatingCircle extends React.Component {
  public render() {
    return (
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'black',
          marginRight: 2,
        }}
      />
    );
  }
}

export class Card extends React.Component<ICardProps> {
  public renderSandwichCards = () => {
    return <View style={styles.finderSandwichCardStyle}></View>;
  };

  public renderCardHeading = () => {
    return (
      <View style={cardStyles.profileHeader}>
        <ProfilePicture profilePictureUri={this.props.profilePicture!} />
        <View style={cardStyles.profileInfo}>
          <Text style={{ fontWeight: '600', fontSize: 18 }}>
            {this.props.profileName}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: '300', marginRight: 10 }}>
              {this.props.jobTitle}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
              }}
            >
              {Array(this.props.rating).fill(<RatingCircle />)}
            </View>
          </View>
        </View>
      </View>
    );
  };

  public renderDefaultCards = () => {
    return (
      <View style={styles.finderDefaultCardStyle}>
        {this.renderCardHeading()}
        <View style={cardStyles.mainContent}>
          <Text>{this.props.summary}</Text>
          <Text>{this.props.experience}</Text>
        </View>
      </View>
    );
  };

  public render() {
    switch (this.props.style) {
      case ProfileCardTypes.FINDER_DEFAULT_CARD_STYLE:
        return this.renderDefaultCards();
      case ProfileCardTypes.FINDER_SANDWICH_CARD_STYLE:
        return this.renderSandwichCards();
      default:
        //TODO: Fix this to something else, idk
        return <View></View>;
    }
    // );
    // } else if (this.props.style == 'finderSandwichCardStyle') {
    //   return this.renderSandwichCards();
    // } else {
    // }
  }
}

const profileHeader: ViewStyle = {
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  backgroundColor: 'white',
  flex: 1,
  flexDirection: 'row',
};

const profileInfo: TextStyle = {
  paddingTop: '5%',
  paddingLeft: '5%',
};

const mainContent: ViewStyle = {
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  backgroundColor: 'blue',
  flex: 4.5,
};

const cardStyles = StyleSheet.create({
  profileHeader,
  profileInfo,
  mainContent,
});
