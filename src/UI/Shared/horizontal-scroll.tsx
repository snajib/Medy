import React from 'react';
import { ScrollView, View } from 'react-native';
import { deviceWidth } from './styles';
import { Card } from './Card';
import uuid from 'uuid-js';
import { IEmployee } from '../../../store/app-action-reducer';

interface IHorizontalScrollProps {
  style: string;
  employeeList: IEmployee[];
}
export class HorizontalScroll extends React.Component<IHorizontalScrollProps> {
  public renderCards(profileList: IEmployee[]) {
    return profileList.map(profile => {
      return (
        <Card
          key={uuid.create().toString()}
          style={this.props.style}
          profilePicture={profile.profilePicture}
          profileName={profile.name}
          jobTitle={profile.jobTitle}
          rating={profile.rating}
          summary={profile.summary}
          experience={profile.experience}
        />
      );
    });
  }

  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={deviceWidth - 80}
          snapToAlignment={'start'}
          centerContent={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 10,
            marginRight: 10,
          }}
          //This is causing the weird offset in the profile cards upon loading finder screen
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 50,
          }}
        >
          <View style={{ width: 30 }} />
          {this.renderCards(this.props.employeeList)}
        </ScrollView>
      </>
    );
  }
}
