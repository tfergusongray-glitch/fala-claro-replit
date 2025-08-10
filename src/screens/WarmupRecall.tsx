import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Base from './_Base';
import MultipleChoice from '../components/MultipleChoice';
import Button from '../components/Button';
import data from '../data/lesson1.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Warmup'>;

export default function WarmupRecall({ navigation }: Props) {
  const warmup = (data as any).warmup;
  const [show, setShow] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);

  function onSelect(id: string) {
    const chosen = warmup.choices.find((c: any) => c.id === id);
    setCorrect(Boolean(chosen?.correct));
    setShow(true);
  }

  return (
    <Base title="Warmup">
      <MultipleChoice prompt={warmup.prompt} choices={warmup.choices} onSelect={onSelect} />
      <Modal visible={show} transparent animationType="fade">
        <View style={styles.modalWrap}>
          <View style={styles.modal}>
            <Text style={{ fontSize: 16, marginBottom: 12 }}>{correct ? warmup.feedback.correct : warmup.feedback.wrong}</Text>
            <Button title="Continue" onPress={() => { setShow(false); navigation.navigate('Dialogue'); }} />
          </View>
        </View>
      </Modal>
    </Base>
  );
}

const styles = StyleSheet.create({
  modalWrap: { flex:1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent:'center', alignItems:'center' },
  modal: { backgroundColor:'#fff', padding:16, borderRadius:12, width:'85%' }
});
