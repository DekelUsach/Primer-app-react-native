// App.js
import React, { useState } from 'react';
import { View, Text, Vibration, StyleSheet, Button } from 'react-native';

export default function App() {
  const [variable, setVariable] = useState(0);

  const changeStyle = () => {
    if (styles.container.backgroundColor === '#fff')
    {
      styles.container.backgroundColor = "#red"
    }
  }

  const handleVibrate = () => {
    Vibration.vibrate(100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pulsa el botón para vibrar</Text>
      <Button onPress={() => {
        setVariable(variable + 1), handleVibrate(), changeStyle()

      }} title='Toque para agregar ' />
      <Text style={styles.title}>{variable}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  }
});
