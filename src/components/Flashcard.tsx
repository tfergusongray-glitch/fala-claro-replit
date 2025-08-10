import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import { colors, spacing } from '../theme';

type Props = { front: string; back: string; onKnow: () => void; onUnknown: () => void };

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;

export default function Flashcard({ front, back, onKnow, onUnknown }: Props) {
  const [flipped, setFlipped] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, g) => {
        translateX.setValue(g.dx);
      },
      onPanResponderRelease: (_, g) => {
        if (g.dx > SWIPE_THRESHOLD) {
          Animated.timing(translateX, { toValue: width, duration: 150, useNativeDriver: true }).start(onKnow);
        } else if (g.dx < -SWIPE_THRESHOLD) {
          Animated.timing(translateX, { toValue: -width, duration: 150, useNativeDriver: true }).start(onUnknown);
        } else {
          Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
        }
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={[styles.card, { transform: [{ translateX }] }]}>
        <TouchableOpacity onPress={() => setFlipped(!flipped)} activeOpacity={0.8}>
          <Text style={styles.text}>{flipped ? back : front}</Text>
          <Text style={styles.hint}>Tap to flip. Swipe right = know, left = not yet.</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  card: { width: '100%', padding: spacing(6), borderRadius: 16, backgroundColor: '#FFF8E1', marginBottom: spacing(2) },
  text: { fontSize: 22, textAlign: 'center', color: colors.text },
  hint: { marginTop: spacing(1), textAlign: 'center', color: '#6B7280' }
});
