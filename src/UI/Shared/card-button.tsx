import React from 'react';
import { View } from 'react-native';

export interface ICardButtonProps {
  type: 'add' | 'expand' | 'remove';
}

export class CardButton extends React.Component<ICardButtonProps> {
  render() {
    switch (this.props.type) {
      case 'add':
        return (
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#FA6868',
              borderWidth: 3,
              borderColor: 'white',
              marginBottom: -40,
              marginHorizontal: 7,
            }}
          />
        );
      case 'expand':
        return (
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: '#6296E8',
              borderWidth: 3,
              borderColor: 'white',
              marginBottom: -40,
              marginHorizontal: 7,
            }}
          />
        );
      case 'remove':
        return (
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#6EE009',
              borderWidth: 3,
              borderColor: 'white',
              marginBottom: -40,
              marginHorizontal: 7,
            }}
          />
        );
    }
  }
}
