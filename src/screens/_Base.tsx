import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

export default function Base({ title, children }: { title: string; children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={[styles.wrap, { paddingBottom: Math.max(spacing(2), insets.bottom) }]}>
        <Text accessibilityRole="header" style={styles.title}>{title}</Text>
        <View style={{ height: spacing(1) }} />
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  wrap: { flex: 1, paddingHorizontal: spacing(2), paddingTop: spacing(2) },
  title: { fontSize: 24, fontWeight: '800', color: colors.text }
});
