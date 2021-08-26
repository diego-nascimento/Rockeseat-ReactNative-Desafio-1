import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 0px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
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
