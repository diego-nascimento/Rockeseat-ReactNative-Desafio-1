import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Wrapper = styled.View`
  background-color: #eee;
  height: 60px;
  padding: 0px 20px;
`;

export const Container = styled.View`
  position: relative;
  top: -25px;

  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  color: #777;
  padding: 15px 20px;
  color: #111;
  flex: 1;
  font-size: 18px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export const ButtonInput = styled.TouchableOpacity`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-left-color: #777;
  border-left-width: ${StyleSheet.hairlineWidth}px;
`;

export const ButtonText = styled.Text`
  color: #555;
`;
