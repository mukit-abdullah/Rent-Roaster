import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import JoinOrCreateGroupScreen from '../screens/JoinOrCreateGroupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ExpenseScreen from '../screens/ExpenseScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import UpdateExpenseScreen from '../screens/UpdateExpenseScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewExpensesScreen from '../screens/ViewExpensesScreen';
import DeleteExpenseScreen from '../screens/DeleteExpenseScreen';
import SignInScreen from '../screens/SignInScreen';  // Import SignInScreen
import ChartScreen from '../screens/ChartScreen';

const Stack = createStackNavigator();

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Warning: Grid: Support for defaultProps will be removed from function components',
]);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000', // Set navigation bar to black
          },
          headerTintColor: '#fff', // Set arrow and text color to white
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff', // Ensure the title is also in white
          },
          headerTitleAlign: 'center', // Center the title
        }}
      >
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        {/* SignIn Screen */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />

        {/* Join or Create Group Screen */}
        <Stack.Screen
          name="JoinOrCreateGroup"
          component={JoinOrCreateGroupScreen}
          options={{ title: "Join or Create Group" }}
        />

        {/* Dashboard Screen */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Dashboard" }}
        />

        {/* Expense Screens */}
        <Stack.Screen
          name="Expense"
          component={ExpenseScreen}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          name="UpdateExpense"
          component={UpdateExpenseScreen}
        />

        {/* Group Chat Screen */}
        <Stack.Screen
          name="GroupChat"
          component={GroupChatScreen}
        />

        {/* Reports and Profile */}
        <Stack.Screen
          name="Reports"
          component={ReportsScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        {/* View and Delete Expenses */}
        <Stack.Screen
          name="ViewExpenses"
          component={ViewExpensesScreen}
        />

        {/* Chart Screen */}
        <Stack.Screen
          name="Chart"
          component={ChartScreen}
        />

        {/* Delete Expense Screen */}
        <Stack.Screen
          name="DeleteExpense"
          component={DeleteExpenseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
