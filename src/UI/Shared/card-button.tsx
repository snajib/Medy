import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface ICardButtonProps {
  type: 'add' | 'expand' | 'remove';
  employeeId: string;
}

export interface ICardButtonActionProps {
  onPress: (employeeId: string) => void;
}

export class CardButton extends React.Component<
  ICardButtonProps & ICardButtonActionProps
> {
  render() {
    switch (this.props.type) {
      case 'remove':
        return (
          <TouchableOpacity
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
            onPress={() => this.props.onPress(this.props.employeeId)}
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
          </TouchableOpacity>
        );
      case 'expand':
        return (
          <TouchableOpacity
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
            onPress={() => this.props.onPress(this.props.employeeId)}
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
          </TouchableOpacity>
        );
      case 'add':
        return (
          <TouchableOpacity
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
            onPress={() => this.props.onPress(this.props.employeeId)}
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
          </TouchableOpacity>
        );
    }
  }
}
