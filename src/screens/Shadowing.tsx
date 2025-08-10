import React from 'react';
import { View, Text } from 'react-native';
import Base from './_Base';
import AudioPlayer from '../components/AudioPlayer';
import Button from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Shadowing'>;

export default function Shadowing({ navigation }: Props) {
  return (
    <Base title="Shadowing">
      <Text style={{ marginBottom: 12 }}>Repeat after the speaker. Focus on 'Bom' and nasal 'ão' in João.</Text>
      <AudioPlayer caption="Native line 1" />
      <AudioPlayer caption="Native line 2" />
      <Button title="Next" onPress={() => navigation.navigate('Noticing')} />
    </Base>
  );
}
