import React from 'react';
import Base from './_Base';
import Button from '../components/Button';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'MicroTask'>;

export default function MicroTask({ navigation }: Props) {
  return (
    <Base title="Micro Task">
      <Text style={{ marginBottom: 12 }}>Introduce yourself to your host. Say your name and where you are from.</Text>
      <Text style={{ color: '#6B7280', marginBottom: 12 }}>Example: Bom dia. Chamo-me Alex. Sou dos EUA.</Text>
      <Button title="Record" onPress={() => {}} />
      <Button title="Next" onPress={() => navigation.navigate('Review')} />
    </Base>
  );
}
