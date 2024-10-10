// /screens/DeleteExpenseScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const DeleteExpenseScreen = ({ deleteExpense }) => {
  const [id, setId] = useState('');

  const handleDeleteExpense = () => {
    if (id === '') {
      Alert.alert('Error', 'Please provide an expense ID');
      return;
    }

    deleteExpense(id); // Delete expense using the passed function
    Alert.alert('Success', 'Expense Deleted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expense ID:</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
        placeholder="Enter expense ID"
      />

      <Button title="Delete Expense" onPress={handleDeleteExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default DeleteExpenseScreen;
