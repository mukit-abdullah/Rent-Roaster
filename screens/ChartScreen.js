import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts';
import { ExpenseContext } from '../context/ExpenseContext';
import { ScrollView } from 'react-native-gesture-handler';
import { G, Line } from 'react-native-svg';

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

  // Custom Grid Lines
  const CustomGrid = ({ x, y, ticks }) => (
    <G>
      {ticks.map(tick => (
        <Line
          key={tick}
          x1="0%"
          x2="100%"
          y1={y(tick)}
          y2={y(tick)}
          stroke="rgba(0,0,0,0.2)"
        />
      ))}
    </G>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Expenses Histogram</Text>
      <View style={{ flexDirection: 'row', height: 300, padding: 20 }}>
        <YAxis
          data={amounts}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: 'grey',
            fontSize: 12,
          }}
          numberOfTicks={5}
          formatLabel={value => `$${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <BarChart
            style={{ flex: 1 }}
            data={amounts}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            contentInset={{ top: 20, bottom: 20 }}
            spacingInner={0.3}
            gridMin={0}
            yAccessor={({ item }) => item}
          >
            <CustomGrid />
          </BarChart>
          <XAxis
            style={{ marginTop: 10 }}
            data={amounts}
            formatLabel={(value, index) => dates[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 12, fill: 'black' }}
          />
        </View>
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
