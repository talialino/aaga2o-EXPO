import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, StatusBar } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

// import { Container } from './styles';

export function FundoDegrade({
  colorBar = '#021F70',
  styleBar = 'white-content',
  customStyle,
  children,
}) {
  return (
    <>
      <StatusBar backgroundColor={colorBar} barStyle={styleBar} />

      <LinearGradient
        colors={['#021F70', '#7159c1']}
        style={[customStyle, styles.Container]}
      >
        {children}
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});