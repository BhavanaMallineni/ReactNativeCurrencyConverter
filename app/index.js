import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
EStyleSheet.build({
   $primaryBlue: '#4F6D7A',

   $white: '#FFF',
   $border: '#E2E2E2',
   $inputText: '#797979',
   $lightGrey: '#A9A9A9',
 
});
export default () => <Home />;