// /screens/ViewExpensesScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ExpenseContext } from '../context/ExpenseContext';

const ViewExpensesScreen = () => {
  const { expenses, deleteExpense, updateExpense } = useContext(ExpenseContext);
  const navigation = useNavigation();

  const handleUpdateExpense = (index) => {
    const expense = expenses[index]; // Get the selected expense by index
    navigation.navigate('UpdateExpense', {
      expense,
      updateExpense: (updatedExpense) => handleUpdate(index, updatedExpense), // Pass the updateExpense function
    });
  };

  const handleUpdate = (index, updatedExpense) => {
    const updatedExpenses = [...expenses]; // Create a copy of the current expenses
    updatedExpenses[index] = updatedExpense; // Replace the updated expense at the given index
    updateExpense(updatedExpenses); // Update the expenses in the context
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.expenseItem}>
      <Text style={styles.textItem}>
        {item.title} - BDT {item.amount} - {item.date}
      </Text>
      <View style={styles.buttons}>
        <Button title="Update" onPress={() => handleUpdateExpense(index)} />
        <Button title="Delete" onPress={() => deleteExpense(index)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />

      {expenses.length > 0 ? (
        <FlatList
          data={expenses}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <Text>No expenses to show. Add some!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#050505'
  },
  expenseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textItem: {
    fontSize: 16,
    color: '#fff'
  },
});

export default ViewExpensesScreen;
