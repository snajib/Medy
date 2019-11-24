import React from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import { styles } from './styles';

export interface ICardProps {
  style?: string;
  profilePicture?: ImageURISource;
  profileName?: string;
  jobTitle?: string;
  rating?: string;
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
        }}
        source={this.props.profilePictureUri}
      />
    );
  }
}

export class Card extends React.Component<ICardProps> {
  public renderSandwichCards = () => {
    return <View style={styles.finderSandwichCardStyle}></View>;
  };

  public renderDefaultCards = () => {
    return (
      <View style={styles.finderDefaultCardStyle}>
        <ProfilePicture profilePictureUri={this.props.profilePicture!} />
        <View style={styles.centerText}>
          <Text>{this.props.profileName}</Text>
          <Text>{this.props.summary}</Text>
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
        return <View></View>;
    }
    // );
    // } else if (this.props.style == 'finderSandwichCardStyle') {
    //   return this.renderSandwichCards();
    // } else {
    // }
  }
}
