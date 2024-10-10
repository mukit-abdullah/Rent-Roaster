import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';

const ExpenseScreen = ({ navigation, route }) => {
  // Managing expenses as state
  const [expenses, setExpenses] = React.useState([
    { id: '1', description: 'Groceries', amount: 50 },
    { id: '2', description: 'Rent', amount: 1000 },
  ]);

  // Add new expense from AddExpenseScreen
  React.useEffect(() => {
    if (route.params?.newExpense) {
      setExpenses((prevExpenses) => [...prevExpenses, route.params.newExpense]);
    }
  }, [route.params?.newExpense]);

  // Update an expense from UpdateExpenseScreen
  const handleUpdate = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  // Delete an expense
  const handleDelete = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Expenses</Text>
      <Button title="Add Expense" onPress={() => navigation.navigate('AddExpense')} />

      {/* Expense List */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.description} - ${item.amount}</Text>
            <Button
              title="Update"
              onPress={() =>
                navigation.navigate('UpdateExpense', { expense: item, onUpdate: handleUpdate })
              }
            />
            <Button
              title="Delete"
              onPress={() => {
                Alert.alert('Delete Expense', 'Are you sure?', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'OK', onPress: () => handleDelete(item.id) },
                ]);
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default ExpenseScreen;
