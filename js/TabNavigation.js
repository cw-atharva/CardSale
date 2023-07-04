import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import KitsScreen from './KitsScreen';
import CardInfo from './CardInfo';
import SignupPage from './SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const KitsScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="KitsScreen" component={KitsScreen} />
    <Stack.Screen name="CardInfo" component={CardInfo} />
    <Stack.Screen name="Signup" component={SignupPage} />
  </Stack.Navigator>
);

const PersonalizedScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Personalized Screen</Text>
  </View>
);

const ReissueScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Reissue Screen</Text>
  </View>
);

const TabNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Kits') {
            iconName = 'box';
          } else if (route.name === 'Personalized') {
            iconName = 'user';
          } else if (route.name === 'Reissue') {
            iconName = 'credit-card';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Kits" component={KitsScreens} />
      <Tab.Screen name="Personalized" component={PersonalizedScreen} />
      <Tab.Screen name="Reissue" component={ReissueScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigation;

//  const fetchData = () => {
//     const data = {
//       value: '9023',
//       page: 0,
//       pageSize: 10,
//       branchId: '4ff819ab-00ea-45b8-9544-205407c0680c',
//     };

//     fetch('https://prod-api.vegapay.tech/forex/account/search', {
//       headers: {
//         Authorization:
//           'Bearer  eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkiLCJldmVudF9pZCI6IjgyNGVmMzBiLWE3MjQtNDFiNi1hZjI5LWEyYzAzNGNlODE5NSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODgzODM1NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg4NDY5OTQ3LCJpYXQiOjE2ODgzODM1NDcsImp0aSI6ImE3YWY1YzNiLTRhNDItNDQyYS1iZWU1LTJjOThmZjRlYTRjOSIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkifQ.NPWeq3Xw_QYWL9g6ZcPEmUwHdgO5Ly8twMUXbGOPweTXEuX0ykZTHF6PZ4Y1PukbRDjcHkz66IMW4Gx36lOrPfeM48JtInsNttA4Cpd9l48pzRjyeiVGzBhXi2c_XU-cjIkyFY2DFszWi7dN1Qxaq2_1yLWl8we3PR8XgWpwAeeFKPFAKhjpgRwVhUAlE0t3ypmHtOeEcMbN1zMVRi3DS64WPFjzrwQhHHFYqw7Igy2xLT14r26yQ3cEzn1ZY_880dpw9voYtn0sNvYEUksgBmXlNx3Y8J4KL-UuceWv9QgezqOUbAyHq9cO4R5UU5QpIubUK6F2bgc5P9NqCiyoDA',
//         'Content-Type': 'application/json',
//       },
//       method: 'POST',
//       body: JSON.stringify(data),
//     })
//       .then((resp) => resp.json())
//       .then((json) =>
//         console.log(JSON.stringify(json.records), '================')
//       )
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
