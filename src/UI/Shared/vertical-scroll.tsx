import React from 'react';
import { ScrollView } from 'react-native';
import uuid from 'uuid-js';
import { Card } from './Card';
import { HomeCard } from './HomeCard';
import { IEmployee, IHome } from '../../../store/app-action-reducer';

interface Props {
  style: string;
  employeeList?: IEmployee[];
  homeList?: IHome[];
  snapToInterval: number;
}

export class VerticalScroll extends React.Component<Props> {
  public renderCards() {
    if (this.props.style === 'homeCardStyle') {
      return this.props.homeList.map(card => {
        return <HomeCard name={card.name} key={uuid.create().toString()} />;
      });
    } else {
      return this.props.employeeList.map(profile => {
        return (
          <Card
            key={uuid.create().toString()}
            style={this.props.style}
            profileName={profile.name}
          />
        );
      });
    }
  }

  render() {
    return (
      <ScrollView
        horizontal={false}
        decelerationRate={0}
        snapToAlignment={'start'}
        snapToInterval={this.props.snapToInterval}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 80 }}
        contentInset={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 80,
        }}
      >
        {this.renderCards()}
      </ScrollView>
    );
  }
}
