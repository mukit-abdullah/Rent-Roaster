import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { ExpenseProvider } from './context/ExpenseContext';

const App = () => {
  return (
    <ExpenseProvider>
      <AppNavigator />
    </ExpenseProvider>
  );
};

export default App;

