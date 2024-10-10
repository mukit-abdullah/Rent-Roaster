import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'; // Using different icon sets for variety

const DashboardScreen = ({ navigation, route }) => {
  const { groupName, groupKey } = route.params; // Get groupName and groupKey from params

  return (
    
    <View style={styles.container}>

      {/* App Logo at the top-left */}
      <Image
        source={require('../assets/AppLogo.png')} // Replace with the correct path to your logo
        style={styles.logo} 
      />
      
      <View style={styles.groupInfoContainer}>
        <Text style={styles.groupLabel}>Group: {groupName}</Text>
        <Text style={styles.groupLabel}>Group Key: {groupKey}</Text>
      </View>

      {/* Grid layout for buttons */}
      <View style={styles.buttonGrid}>
        {/* Add Expense Button */}
        <TouchableOpacity
          style={styles.gridButton}
          onPress={() => navigation.navigate('AddExpense')}
        >
          <FontAwesome name="plus-circle" size={40} color="#fff" />
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        {/* View Expenses Button */}
        <TouchableOpacity
          style={styles.gridButton}
          onPress={() => navigation.navigate('ViewExpenses')}
        >
          <FontAwesome name="eye" size={40} color="#fff" />
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>

        {/* Chat Button */}
        <TouchableOpacity
          style={styles.gridButton}
          onPress={() => navigation.navigate('GroupChat')}
        >
          <Ionicons name="chatbubbles" size={40} color="#fff" />
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

        {/* Report Button */}
        <TouchableOpacity
          style={styles.gridButton}
          onPress={() => navigation.navigate('Reports')}
        >
          <MaterialIcons name="insert-chart" size={40} color="#fff" />
          <Text style={styles.buttonText}>Report</Text>
        </TouchableOpacity>

      
        {/* charts button */}
        <TouchableOpacity
        style={styles.gridButton}
        onPress={() => navigation.navigate('Chart')} // Ensure the screen name matches your navigator
>
        <FontAwesome name="bar-chart" size={40} color="#fff" />
        <Text style={styles.buttonText}>Chart</Text>
        </TouchableOpacity>



        {/* Logout Button */}
        <TouchableOpacity
          style={styles.gridButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Ionicons name="log-out" size={40} color="#fff" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#050505',
  },
  groupInfoContainer: {
    position: 'absolute',
    top: 10,
    right: 10, // Placed at the top-left corner
    alignItems: 'flex-start',
  },
  groupLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#fff',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows grid layout (2x3)
    justifyContent: 'space-between',
    width: '80%', // Adjust to your preference
    marginTop: 0, // Space below the group info
  },
  gridButton: {
    backgroundColor: '#FF0000',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    width: 120, // Button size
    height: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  logo: {
    position: 'absolute',
    top: 10,
    left: 15,
    width: 95,  // Adjust to your preferred size
    height: 45,
  },
});

export default DashboardScreen;
