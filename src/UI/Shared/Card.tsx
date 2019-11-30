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
import { CardButton } from './card-button';

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
          borderWidth: 8,
          borderColor: 'white',
          borderRadius: 75,
          marginTop: -40,
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
          backgroundColor: '#464343',
          marginRight: 2,
        }}
      />
    );
  }
}

class SectionDivider extends React.Component {
  public render() {
    return (
      <View
        style={{
          borderColor: '#e6e6e6',
          borderWidth: 1,
          height: 1,
          marginBottom: 5,
          width: '80%',
          marginLeft: '15%',
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
          <Text
            style={{
              color: '#464343',
              fontWeight: '700',
              fontSize: 18,
            }}
          >
            {this.props.profileName}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ color: '#9F9F9F', fontWeight: '400', marginRight: 10 }}
            >
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
          <Text style={{ ...cardStyles.mainContentHeaders, marginLeft: '7%' }}>
            Summary
          </Text>
          <View style={cardStyles.mainContentCardSectionBody}>
            <Text style={cardStyles.mainContentSummary}>
              {this.props.summary}
            </Text>
          </View>
          <SectionDivider />
          <Text style={{ ...cardStyles.mainContentHeaders, marginLeft: '7%' }}>
            Experience
          </Text>
          <View style={cardStyles.mainContentCardSectionBody}>
            <Text>{this.props.experience}</Text>
          </View>
        </View>
        <View style={cardStyles.profileCardButtonView}>
          <CardButton type={'add'} />
          <CardButton type={'expand'} />
          <CardButton type={'remove'} />
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
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  backgroundColor: 'white',
  flex: 1,
  flexDirection: 'row',
};

const profileCardButtonView: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
};

const profileInfo: TextStyle = {
  paddingTop: '5%',
  paddingLeft: '5%',
};

const mainContent: ViewStyle = {
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  flex: 4.5,
};

const mainContentHeaders: TextStyle = {
  color: '#464343',
  fontWeight: '800',
  fontSize: 18,
};

const mainContentCardSectionBody: ViewStyle = {
  borderRadius: 12,
  //TODO: This height percentage matches with entire screen, no view its within. FIX
  // height: '30%',
  width: '90%',
  alignSelf: 'center',
  alignItems: 'flex-start',
};

const mainContentSummary: TextStyle = {
  textAlign: 'justify',
  alignSelf: 'flex-start',
  padding: '3%',
  color: '#9F9F9F',
  fontWeight: '500',
};

const mainContentCardExperience: ViewStyle = {
  borderRadius: 12,
  padding: '5%',
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  //TODO: This height percentage matches with entire screen, no view its within. FIX
  height: '50%',
  width: '90%',
  justifyContent: 'center',
  alignSelf: 'center',
};

const cardStyles = StyleSheet.create({
  mainContent,
  mainContentCardSectionBody,
  mainContentSummary,
  mainContentHeaders,
  mainContentCardExperience,
  profileCardButtonView,
  profileHeader,
  profileInfo,
});
