// /screens/AddExpenseScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ExpenseContext } from '../context/ExpenseContext';

const AddExpenseScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(null); // Initially empty
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { addExpense } = useContext(ExpenseContext);

  const handleAddExpense = () => {
    if (title === '' || amount === '' || !date) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newExpense = {
      title,
      amount,
      date: date.toLocaleDateString(),
    };

    addExpense(newExpense); // Use context to add the new expense
    Alert.alert('Success', 'Expense Added!');
    navigation.goBack();
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || date;
    setDate(currentDate); // Update the state with the selected date
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expense Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        color="#fff"
        placeholderTextColor="#8c8c8c"
      />

      <Text style={styles.label}>Expense Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
        color="#fff"
        placeholderTextColor="#8c8c8c"
      />

      <Text style={styles.label}>Expense Date:</Text>
      <TouchableOpacity onPress={showDatepicker}>
        <TextInput
          style={styles.input}
          placeholder="Select Date"
          color="#fff"
          placeholderTextColor="#8c8c8c"
          value={date ? date.toLocaleDateString() : ''} // Display selected date or empty if no date is selected
          editable={false} // User can't manually type in the date, only select from the calendar
          pointerEvents="none" // Disable pointer events to avoid keyboard opening
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()} // Set the picker date to the current date if no date is selected
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#050505'
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    color: '#333',
  },
});

export default AddExpenseScreen;
