import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SignupPage = () => {
  const [programType, setProgramType] = useState('');
  const [programName, setProgramName] = useState('');
  const [corporateName, setCorporateName] = useState('');

  const handleSignup = () => {
    // Signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Program Type</Text>
        <Picker
          selectedValue={programType}
          style={styles.dropdown}
          onValueChange={(itemValue) => setProgramType(itemValue)}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Corporate" value="corporate" />
        </Picker>
      </View>

      {programType === 'corporate' && (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Program Name</Text>
          <Picker
            selectedValue={programName}
            style={styles.dropdown}
            onValueChange={(itemValue) => setProgramName(itemValue)}
          >
            <Picker.Item label="Program A" value="programA" />
            <Picker.Item label="Program B" value="programB" />
          </Picker>
        </View>
      )}

      {programType === 'corporate' && (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Corporate Name</Text>
          <Picker
            selectedValue={corporateName}
            style={styles.dropdown}
            onValueChange={(itemValue) => setCorporateName(itemValue)}
          >
            <Picker.Item label="Corporate X" value="corporateX" />
            <Picker.Item label="Corporate Y" value="corporateY" />
          </Picker>
        </View>
      )}

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  formGroup: {
    marginBottom: 24,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#666',
  },
  dropdown: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  signupButton: {
    backgroundColor: '#FF5F5F',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  signupButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignupPage;
