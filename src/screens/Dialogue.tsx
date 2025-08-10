import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Base from './_Base';
import AudioPlayer from '../components/AudioPlayer';
import data from '../data/lesson1.json';
import Button from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Dialogue'>;

export default function Dialogue({ navigation }: Props) {
  const dialogue = (data as any).dialogue as Array<any>;
  return (
    <Base title="Dialogue">
      <AudioPlayer caption="Listen to the conversation" />
      <ScrollView style={{ marginTop: 12 }}>
        {dialogue.map((line, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={styles.speaker}>{line.speaker}:</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.pt}>{line.pt}</Text>
              <Text style={styles.en}>{line.en}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Button title="Next" onPress={() => navigation.navigate('Shadowing')} />
    </Base>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginBottom: 10 },
  speaker: { width: 24, fontWeight: '700' },
  pt: { fontSize: 16 },
  en: { color: '#6B7280' }
});
