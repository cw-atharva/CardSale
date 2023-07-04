import React from 'react';
import { FlatList } from 'react-native';
import CustomerCard from './CustomerCard';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ICustomerInfo {}

type Props = {
  searchResults: ICustomerInfo;
  navigation: NavigationProp<ParamListBase>;
};

function CustomerList(props: Props) {
  const { searchResults, navigation } = props || {};

  const renderItem = ({ item, index }) => {
    return <CustomerCard item={item} navigation={navigation} />;
  };

  return (
    <FlatList
      data={searchResults}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default CustomerList;
