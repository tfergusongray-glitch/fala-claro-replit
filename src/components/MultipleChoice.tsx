import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

type Choice = { id: string; text: string };
type Props = { prompt: string; choices: Choice[]; onSelect: (id: string) => void };

export default function MultipleChoice({ prompt, choices, onSelect }: Props) {
  return (
    <View>
      <Text style={styles.prompt}>{prompt}</Text>
      {choices.map(c => (
        <TouchableOpacity key={c.id} style={styles.card} onPress={() => onSelect(c.id)}>
          <Text style={styles.cardText}>{c.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  prompt: { fontSize: 20, fontWeight: '700', marginBottom: spacing(2), color: colors.text },
  card: { padding: spacing(2), borderRadius: 8, borderColor: '#E5E7EB', borderWidth: 1, marginBottom: spacing(1) },
  cardText: { fontSize: 16, color: colors.text }
});
