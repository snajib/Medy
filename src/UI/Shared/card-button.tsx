import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface ICardButtonProps {
  type: 'add' | 'expand' | 'remove';
}

export class CardButton extends React.Component<ICardButtonProps> {
  render() {
    switch (this.props.type) {
      case 'remove':
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
              marginTop: 12,
              marginHorizontal: 5,
              justifyContent: 'center',
            }}
          >
            <Ionicons
              name='ios-close'
              size={30}
              style={{
                paddingHorizontal: 15,
                color: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
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
              marginBottom: -35,
              marginHorizontal: 5,
              justifyContent: 'center',
            }}
          >
            <Ionicons
              name='ios-expand'
              size={30}
              style={{
                paddingHorizontal: 15,
                color: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
        );
      case 'add':
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
              marginTop: 12,
              marginHorizontal: 5,
              justifyContent: 'center',
            }}
          >
            <Ionicons
              name='ios-add'
              size={30}
              style={{
                paddingHorizontal: 15,
                color: 'white',
                alignSelf: 'center',
              }}
            />
          </View>
        );
    }
  }
}
