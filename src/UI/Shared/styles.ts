import { StyleSheet, ViewStyle, Dimensions, TextStyle } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const topPrimaryContainterStyle: ViewStyle = {
  flex: 1,
  backgroundColor: '#5F44BA',
  alignItems: 'center',
};

const topSecondaryContainerStyle: ViewStyle = {
  flex: 1,
  marginTop: '22%',
};

const centerText: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const titleText: TextStyle = {
  fontSize: 36,
  fontStyle: 'normal',
  fontWeight: 'bold',
  textAlign: 'left',
  color: '#fff',
  paddingLeft: '3.5%',
};

const wholeDefaultCardStyle: ViewStyle = {
  backgroundColor: '#fff',
  borderRadius: 12,
  marginTop: 10,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  height: deviceHeight,
  width: deviceWidth,
};

const finderDefaultCardStyle: ViewStyle = {
  backgroundColor: '#fff',
  borderRadius: 25,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  marginTop: 100,
  marginLeft: 10,
  marginRight: 10,
  height: (deviceHeight * 68) / 100,
  width: (deviceWidth * 75.8) / 100,
};

const homeCardStyle: ViewStyle = {
  backgroundColor: '#fff',
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.8,
  shadowRadius: 3,
  height: deviceHeight - 450,
  width: deviceWidth - 100,
  marginBottom: 40,
};

const topAccordionContainer: ViewStyle = {
  paddingLeft: '5%',
  paddingTop: '2.5%',
};

const accordionSectionLabel: TextStyle = {
  fontSize: 30,
  fontStyle: 'normal',
  fontWeight: 'bold',
  textAlign: 'left',
  color: '#000',
  paddingTop: '5%',
};

const sectionActive: ViewStyle = {
  paddingLeft: '5%',
};

const sectionInActive: ViewStyle = {
  height: 0,
  overflow: 'hidden',
};

export const styles = StyleSheet.create({
  topPrimaryContainterStyle,
  topSecondaryContainerStyle,
  finderDefaultCardStyle,
  centerText,
  titleText,
  homeCardStyle,
  wholeDefaultCardStyle,
  topAccordionContainer,
  accordionSectionLabel,
  sectionActive,
  sectionInActive,
});
