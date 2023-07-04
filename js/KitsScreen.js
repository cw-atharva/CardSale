import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import CustomerList from './CustomerList';

const KitsScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = () => {
    const data = {
      value: `${searchTerm}`,
      page: 0,
      pageSize: 10,
      branchId: '4ff819ab-00ea-45b8-9544-205407c0680c',
    };

    fetch('https://prod-api.vegapay.tech/forex/account/search', {
      headers: {
        Authorization:
          'Bearer  eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkiLCJldmVudF9pZCI6IjgyNGVmMzBiLWE3MjQtNDFiNi1hZjI5LWEyYzAzNGNlODE5NSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODgzODM1NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg4NDY5OTQ3LCJpYXQiOjE2ODgzODM1NDcsImp0aSI6ImE3YWY1YzNiLTRhNDItNDQyYS1iZWU1LTJjOThmZjRlYTRjOSIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkifQ.NPWeq3Xw_QYWL9g6ZcPEmUwHdgO5Ly8twMUXbGOPweTXEuX0ykZTHF6PZ4Y1PukbRDjcHkz66IMW4Gx36lOrPfeM48JtInsNttA4Cpd9l48pzRjyeiVGzBhXi2c_XU-cjIkyFY2DFszWi7dN1Qxaq2_1yLWl8we3PR8XgWpwAeeFKPFAKhjpgRwVhUAlE0t3ypmHtOeEcMbN1zMVRi3DS64WPFjzrwQhHHFYqw7Igy2xLT14r26yQ3cEzn1ZY_880dpw9voYtn0sNvYEUksgBmXlNx3Y8J4KL-UuceWv9QgezqOUbAyHq9cO4R5UU5QpIubUK6F2bgc5P9NqCiyoDA',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((json) => setSearchResults(json?.records))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search with mobile Number"
          value={searchTerm}
          onChangeText={setSearchTerm}
          inputMode="numeric"
        />
        <Button title="Search" onPress={fetchData} />
      </View>
      <CustomerList searchResults={searchResults} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  resultsContainer: {
    marginTop: 16,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default KitsScreen;
