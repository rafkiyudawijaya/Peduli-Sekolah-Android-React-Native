import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';

const Application = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  );
};

export default Application;
