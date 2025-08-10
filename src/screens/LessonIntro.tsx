import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Base from './_Base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export default function LessonIntro({ navigation }: Props) {
  return (
    <Base title="Bom dia, Lisboa!">
      <Image source={{ uri: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1080&q=80' }} style={styles.hero} />
      <Text style={styles.subtitle}>Learn to greet, introduce yourself, and say where you are from.</Text>
      <Text style={styles.small}>Scenario: Meet your Airbnb host in Lisbon.</Text>
      <Button title="Start Lesson" onPress={() => navigation.navigate('Warmup')} />
    </Base>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', height: 200, borderRadius: 12, marginBottom: 12 },
  subtitle: { fontSize: 16, marginBottom: 8 },
  small: { color: '#6B7280' }
});
