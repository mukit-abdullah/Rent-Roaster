import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UpdateExpenseScreen = ({ route, navigation }) => {
  const { expense, updateExpense } = route.params; // Destructure expense and updateExpense from route params

  // Check if the params are correctly passed
  console.log('Received expense:', expense);
  console.log('Update function:', updateExpense);

  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount.toString()); // Ensure amount is a string for TextInput
  const [date, setDate] = useState(expense.date);

  const handleUpdate = () => {
    if (title === '' || amount === '' || date === '') { // Check if any field is empty
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
  
    const updatedExpense = { 
      title, 
      amount: parseFloat(amount), // Convert amount back to a number
      date 
    };
  
    updateExpense(updatedExpense); // Call the update function
    Alert.alert('Success', 'Expense Updated!');
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Expense Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Update Expense" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#050505'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginBottom: 15,
    padding: 10,
    color: '#fff',
  },
});

export default UpdateExpenseScreen;
