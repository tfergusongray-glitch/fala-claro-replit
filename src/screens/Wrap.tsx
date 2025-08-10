import React from 'react';
import Base from './_Base';
import Button from '../components/Button';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Wrap'>;

export default function Wrap({ navigation }: Props) {
  return (
    <Base title="Lesson Complete">
      <Text>You learned greetings, self introduction, and where you are from.</Text>
      <Button title="Take Survival Challenge" onPress={() => {}} />
      <Button kind="secondary" title="Back to start" onPress={() => navigation.navigate('Intro')} />
    </Base>
  );
}
