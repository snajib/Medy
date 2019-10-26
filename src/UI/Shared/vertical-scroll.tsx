import React from 'react';
import { ScrollView, ViewStyle, StyleProp } from 'react-native';
import { Card } from './Card';
import uuid from 'uuid-js';

interface Props {
  style: StyleProp<ViewStyle>;
  schema?: string[];
  snapToInterval: number;
}

export class VerticalScroll extends React.Component<Props> {
  public renderCards(list: string[]) {
    return list.map(section => {
      return (
        <Card
          key={uuid.create().toString()}
          style={this.props.style}
          profileName={section}
        />
      );
    });
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
          bottom: 80
        }}
      >
        {this.renderCards(this.props.schema)}
      </ScrollView>
    );
  }
}
