import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors, spacing } from '../theme';

type Props = { title: string; onPress: (e: GestureResponderEvent) => void; kind?: 'primary'|'secondary' };

export default function Button({ title, onPress, kind='primary' }: Props) {
  async function handlePress(e: GestureResponderEvent) {
    try { await Haptics.selectionAsync(); } catch {}
    onPress(e);
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={[styles.btn, kind==='secondary' && styles.secondary]}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Text style={[styles.text, kind==='secondary' && styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    minHeight: 44,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(2),
    borderRadius: 12,
    alignItems: 'center',
    marginTop: spacing(2)
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary
  },
  text: { color: colors.text, fontSize: 17, fontWeight: '700' },
  secondaryText: { color: colors.primary }
});
