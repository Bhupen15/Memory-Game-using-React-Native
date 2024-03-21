import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ symbol, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.card, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}>
    <Text style={styles.symbol}>{symbol}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 10,
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  symbol: {
    fontSize: 24,
  },
});

export default Card;
