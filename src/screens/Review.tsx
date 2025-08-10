import React, { useState } from 'react';
import Base from './_Base';
import Flashcard from '../components/Flashcard';
import data from '../data/lesson1.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Review'>;

export default function Review({ navigation }: Props) {
  const items = (data as any).review as Array<{front:string, back:string}>;
  const [idx, setIdx] = useState(0);
  const item = items[idx];

  function next() {
    if (idx + 1 < items.length) setIdx(idx + 1);
    else navigation.navigate('Wrap');
  }

  return (
    <Base title="Review">
      <Flashcard front={item.front} back={item.back} onKnow={next} onUnknown={next} />
    </Base>
  );
}
