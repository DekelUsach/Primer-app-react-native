import React, { useState } from 'react';
import { View, Text, Vibration, StyleSheet, Button } from 'react-native';

export default function App() {
  const [variable, setVariable] = useState(0);
  const [color, setColor] = useState('#fff');

  const cambiarColor = () => {
    if (color === '#fff') {
      setColor('#71ff33');
    } else {
      setColor('#fff');
    }
  };

  const vibracion = () => {
    Vibration.vibrate(100);
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button
        onPress={() => {
          setVariable(variable + 1);
          vibracion();
          cambiarColor();
        }}
        title="Toque para agregar"
      />
      <Text style={styles.title}>{variable}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  btn: {
    marginBottom: 10,
  },
});
