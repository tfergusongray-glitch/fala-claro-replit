import React, { useState } from 'react';
import Base from './_Base';
import MultipleChoice from '../components/MultipleChoice';
import data from '../data/lesson1.json';
import Button from '../components/Button';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Noticing'>;

export default function Noticing({ navigation }: Props) {
  const n = (data as any).noticing;
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <Base title="Noticing">
      <MultipleChoice prompt={n.prompt} choices={n.choices} onSelect={(id) => setSelected(id)} />
      {selected ? (
        <View>
          <Text style={{ marginTop: 12 }}>{n.explain}</Text>
          <Button title="Next" onPress={() => navigation.navigate('MicroTask')} />
        </View>
      ) : null}
    </Base>
  );
}
