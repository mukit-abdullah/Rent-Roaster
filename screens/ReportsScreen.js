import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';

const ReportsScreen = () => {
  const { expenses } = useContext(ExpenseContext); // Get expenses from context
  const [reportData, setReportData] = useState([]);

  // Set report data to all expenses
  useEffect(() => {
    console.log("Expenses data:", expenses); // Log expenses to see their format
    setReportData(expenses);
  }, [expenses]);

  const formatDate = (dateString) => {
    // Check if the date string is already a Date object
    if (dateString instanceof Date) {
      return dateString.toLocaleDateString(undefined, options);
    }
  
    // Try parsing the date string
    const parsedDate = new Date(dateString);
  
    // If parsedDate is still invalid, we might need to handle custom formats
    if (isNaN(parsedDate.getTime())) {
      // Example: handle MM/DD/YYYY format
      const parts = dateString.split("/");
      if (parts.length === 3) {
        const [month, day, year] = parts;
        const customParsedDate = new Date(`${year}-${month}-${day}`);
        return isNaN(customParsedDate.getTime()) ? 'Invalid Date' : customParsedDate.toLocaleDateString(undefined, options);
      }
  
      return 'Invalid Date';
    }
  
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Customize date options
    return parsedDate.toLocaleDateString(undefined, options);
  };
  

  const renderExpense = ({ item }) => {
    // Log the date to check its format
    console.log("Expense date:", item.date);
    
    const formattedDate = formatDate(item.date);

    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>{formattedDate}</Text>
        <Text style={styles.cardAmount}>BDT {item.amount}</Text>
      </View>
    );
  };

  const handleDownloadPress = () => {
    Alert.alert("Download", "Report download successful!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Report</Text>

      <FlatList
        data={reportData}
        renderItem={renderExpense}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No expenses to show</Text>}
      />

      <TouchableOpacity style={styles.button} onPress={handleDownloadPress}>
        <Text style={styles.buttonText}>Download Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b3b3b',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  cardAmount: {
    fontSize: 16,
    color: '#4caf50',
    fontWeight: '600',
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReportsScreen;
