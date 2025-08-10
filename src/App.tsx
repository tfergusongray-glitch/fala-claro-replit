import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import LessonIntro from './screens/LessonIntro';
import WarmupRecall from './screens/WarmupRecall';
import Dialogue from './screens/Dialogue';
import Shadowing from './screens/Shadowing';
import Noticing from './screens/Noticing';
import MicroTask from './screens/MicroTask';
import Review from './screens/Review';
import Wrap from './screens/Wrap';

export type RootStackParamList = {
  Intro: undefined;
  Warmup: undefined;
  Dialogue: undefined;
  Shadowing: undefined;
  Noticing: undefined;
  MicroTask: undefined;
  Review: undefined;
  Wrap: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <StatusBar style="dark" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            fullScreenGestureEnabled: true
          }}
        >
          <Stack.Screen name="Intro" component={LessonIntro} />
          <Stack.Screen name="Warmup" component={WarmupRecall} />
          <Stack.Screen name="Dialogue" component={Dialogue} />
          <Stack.Screen name="Shadowing" component={Shadowing} />
          <Stack.Screen name="Noticing" component={Noticing} />
          <Stack.Screen name="MicroTask" component={MicroTask} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="Wrap" component={Wrap} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
