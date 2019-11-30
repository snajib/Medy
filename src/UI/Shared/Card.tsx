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
import { ScrollView } from 'react-native-gesture-handler';
import { IEmployeeExperience } from '../../../store/app-action-reducer';

export interface ICardProps {
  style?: string;
  profilePicture?: ImageURISource;
  profileName?: string;
  jobTitle?: string;
  rating?: number;
  summary?: string;
  experience?: IEmployeeExperience[];
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
          marginBottom: 20,
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
          width: '80%',
          marginTop: '3%',
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

  public renderExperience = () => {
    return this.props.experience.map(experience => {
      return (
        <View style={{ padding: '2%' }}>
          <Text style={cardStyles.mainContentExperienceTitle}>
            {experience.title}
          </Text>
          <Text style={cardStyles.mainContentExperienceRest}>
            {experience.company}
          </Text>
          <Text style={cardStyles.mainContentExperienceRest}>
            {experience.startDate} - {experience.endDate}
          </Text>
        </View>
      );
    });
  };

  public renderDefaultCards = () => {
    return (
      <View style={styles.finderDefaultCardStyle}>
        {this.renderCardHeading()}
        <View style={cardStyles.mainContent}>
          <Text style={{ ...cardStyles.mainContentHeaders, marginLeft: '7%' }}>
            Summary
          </Text>
          <View style={cardStyles.mainContentSummaryBody}>
            <ScrollView>
              <Text style={cardStyles.mainContentSummary}>
                {this.props.summary}
              </Text>
            </ScrollView>
          </View>
          <SectionDivider />
          <Text style={{ ...cardStyles.mainContentHeaders, marginLeft: '7%' }}>
            Experience
          </Text>
          <View style={cardStyles.mainContentExperienceBody}>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignContent: 'space-between',
                }}
              >
                {this.renderExperience()}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={cardStyles.profileCardButtonView}>
          <CardButton type={'remove'} />
          <CardButton type={'expand'} />
          <CardButton type={'add'} />
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
        return <View />;
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
  marginTop: '3%',
};

const mainContentSummary: TextStyle = {
  textAlign: 'justify',
  alignSelf: 'flex-start',
  padding: '3%',
  color: '#9F9F9F',
  fontWeight: '500',
};

const mainContentSummaryBody: ViewStyle = {
  borderRadius: 12,
  //TODO: This height percentage matches with entire screen, no view its within. FIX
  // height: '30%',
  width: '90%',
  maxHeight: '20%',
  alignSelf: 'center',
  alignItems: 'flex-start',
};

const mainContentExperience: TextStyle = {
  textAlign: 'justify',
  alignSelf: 'flex-start',
  paddingLeft: '3%',
  color: '#9F9F9F',
  fontWeight: '500',
};

const mainContentExperienceTitle: TextStyle = {
  textAlign: 'justify',
  alignSelf: 'flex-start',
  paddingLeft: '3%',
  color: 'black',
  fontSize: 15,
  fontWeight: '600',
};

const mainContentExperienceRest: TextStyle = {
  textAlign: 'justify',
  alignSelf: 'flex-start',
  paddingLeft: '3%',
  color: '#9F9F9F',
  fontSize: 12,
  fontWeight: '600',
};

const mainContentExperienceBody: ViewStyle = {
  borderRadius: 12,
  width: '90%',
  alignSelf: 'center',
  alignItems: 'flex-start',
};

const cardStyles = StyleSheet.create({
  mainContent,
  mainContentSummaryBody,
  mainContentExperienceBody,
  mainContentSummary,
  mainContentExperience,
  mainContentExperienceTitle,
  mainContentExperienceRest,
  mainContentHeaders,
  profileCardButtonView,
  profileHeader,
  profileInfo,
});
