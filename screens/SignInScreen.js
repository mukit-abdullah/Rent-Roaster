import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    // Simple validation (you can replace with your authentication logic)
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Simulating login and navigation to the next screen
    navigation.navigate('JoinOrCreateGroup');  // Navigates to Join/Create Group Screen
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/AppLogo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Rent Roster</Text>
      <Text style={styles.subtitle}>Sign In to Your Account</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text onPress={() => navigation.navigate('Signup')} style={styles.signupText}>
        Don’t have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -30,
    alignSelf: 'center',
    marginTop: -80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6E6E6E',
    marginBottom: 80,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'blue',
  }
});

export default SignInScreen;
