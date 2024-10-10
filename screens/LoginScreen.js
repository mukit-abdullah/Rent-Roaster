import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Email and Password are required');
      Alert.alert('Invalid Input', 'Both fields must be filled out.');
    } else {
      // Clear error message and navigate to the next screen
      setErrorMessage('');
      navigation.navigate('JoinOrCreateGroup');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/AppLogo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Rent Roster</Text>
      <Text style={styles.subtitle}>Account Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Password hidden
        autoCapitalize="none"
      />

      {/* Error Message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />

      {/* Sign Up Navigation */}
      <Text onPress={() => navigation.navigate('SignIn')} style={styles.signupText}>
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
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'blue',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginScreen;
