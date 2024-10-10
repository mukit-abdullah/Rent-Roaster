import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const JoinOrCreateGroupScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [groupKey, setGroupKey] = useState('');

  const handleCreateGroup = () => {
    if (groupName === '') {
      Alert.alert('Error', 'Group name cannot be empty');
      return;
    }
    // Generate a simple random group key
    const generatedGroupKey = Math.random().toString(36).substring(7).toUpperCase();
    Alert.alert('Group Created', `Your group key is: ${generatedGroupKey}`);
    // Navigate to Dashboard with both group name and generated key
    navigation.navigate('Dashboard', { groupName, groupKey: generatedGroupKey });
  };

  const handleJoinGroup = () => {
    if (groupKey === '') {
      Alert.alert('Error', 'Group key cannot be empty');
      return;
    }
    // For simplicity, assume the group exists and navigate to dashboard
    navigation.navigate('Dashboard', { groupName: 'Existing Group', groupKey }); // Example
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create Group</Text>
      <TextInput
        style={styles.input}
        value={groupName}
        onChangeText={setGroupName}
        placeholder="Enter Group Name"
      />
      <Button title="Create Group" onPress={handleCreateGroup} />

      <Text style={styles.label}>Or Join Group</Text>
      <TextInput
        style={styles.input}
        value={groupKey}
        onChangeText={setGroupKey}
        placeholder="Enter Group Key"
      />
      <Button title="Join Group" onPress={handleJoinGroup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default JoinOrCreateGroupScreen;
