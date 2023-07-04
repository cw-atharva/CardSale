import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  accountId: string;
  kitId: string;
  cardNumber: number;
  expiryDate: string;
};

const CardInfo = ({ route }) => {
  const { card } = route.params || {};
  const { accountId, expiryDate, id, lastFourDigits } = card || {};

  const renderUserDetail = (label: string, renderValue: string | number) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>
          {renderValue ? renderValue : `No ${label} is available`}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderUserDetail('Account ID', accountId)}
      {renderUserDetail('Kit ID', id)}
      {renderUserDetail('Card Number', lastFourDigits)}
      {renderUserDetail('Expiry Date', expiryDate)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
  },
});

export default CardInfo;
