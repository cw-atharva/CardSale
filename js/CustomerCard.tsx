import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ICustomerDetails } from './interface';

type Props = {
  item: ICustomerDetails;
  navigation: NavigationProp<ParamListBase>;
};

const CustomerCard = (props: Props) => {
  const { item, navigation } = props;
  const { account, customer, card } = item || {};
  const { fullName, mobileNumber, emailId } = customer || {};
  const { cardNumber, cardNetwork } = card || {};

  const handleAction = () => {
    const screenName = account ? 'CardInfo' : 'Signup';
    navigation.navigate(screenName, {
      card: card,
    });
  };

  const getButtonName = () => {
    return account ? 'View' : 'Create Account';
  };

  const cardDetail = (name: string, renderValue: string | number) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.value}>{renderValue}</Text>
      </View>
    );
  };

  return (
    <View style={styles.cardContainer}>
      {cardDetail('Name:', fullName)}
      {cardDetail('Card No', cardNumber)}
      {cardDetail('Email Address', emailId)}
      {cardDetail('Mobile Number', mobileNumber)}
      {cardDetail('Card Network', cardNetwork)}
      <TouchableOpacity style={styles.actionButton} onPress={handleAction}>
        <Text style={styles.actionButtonText}>{getButtonName()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#FF5F5F',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    zIndex: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomerCard;
