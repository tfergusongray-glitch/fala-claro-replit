import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { colors, spacing } from '../theme';

type Props = { source?: any; caption?: string };

export default function AudioPlayer({ source, caption }: Props) {
  const [playing, setPlaying] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

  async function toggle() {
    if (!soundRef.current) {
      const { sound } = await Audio.Sound.createAsync(source || require('../../assets/sample.mp3'));
      soundRef.current = sound;
      await sound.playAsync();
      setPlaying(true);
      sound.setOnPlaybackStatusUpdate((status: any) => {
        if (status.didJustFinish) setPlaying(false);
      });
    } else {
      const status = await soundRef.current.getStatusAsync();
      if ('isPlaying' in status && status.isPlaying) {
        await soundRef.current.pauseAsync();
        setPlaying(false);
      } else {
        await soundRef.current.playAsync();
        setPlaying(true);
      }
    }
  }

  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={toggle} style={styles.button}>
        <Text style={styles.buttonText}>{playing ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', gap: spacing(1) },
  button: { backgroundColor: colors.text, paddingVertical: spacing(1), paddingHorizontal: spacing(2), borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: '700' },
  caption: { marginLeft: spacing(1), color: colors.muted }
});
