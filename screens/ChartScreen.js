import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ExpenseContext } from '../context/ExpenseContext';
import { ScrollView } from 'react-native-gesture-handler';

const ChartsScreen = () => {
  const { expenses } = useContext(ExpenseContext);
  const [amounts, setAmounts] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    if (expenses.length > 0) {
      const amountsData = expenses.map(expense => expense.amount);
      const datesData = expenses.map(expense =>
        new Date(expense.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })
      );

      setAmounts(amountsData);
      setDates(datesData);
    } else {
      console.log('No expenses found');
    }
  }, [expenses]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Expenses Histogram</Text>
      <View style={{ padding: 20 }}>
        <BarChart
          data={{
            labels: dates,
            datasets: [
              {
                data: amounts,
              },
            ],
          }}
          width={Math.min(Dimensions.get('window').width - 40, 700)}
          height={300}
          fromZero
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            decimalPlaces: 0,
            propsForBackgroundLines: {
              stroke: 'rgba(0,0,0,0.2)',
            },
            barPercentage: 0.7,
          }}
          style={{
            borderRadius: 8,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ChartsScreen;
