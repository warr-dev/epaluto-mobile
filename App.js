import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text } from "react-native";
import OnboardingScreen from './src/screens/Onboarding'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './src/screens/Login';
import SignupAs from './src/screens/SignupAs';
import Signup from './src/screens/Signup';
import SignupCook from './src/screens/SignupCook';

const Stack = createNativeStackNavigator();



export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);
  useEffect(() => {
    const checkFirstTimeOpen = async () => {
      try {
        const isFirstTimeOpen = await AsyncStorage.getItem('fresh');
        if (isFirstTimeOpen == 'false') {
          setFirstLaunch(true);
          AsyncStorage.setItem('fresh', 'false');
        } else setFirstLaunch(false);
      } catch (error) {
        console.error('Error checking first time open:', error);
      }
    };
    checkFirstTimeOpen();
  }, []);

  console.log(firstLaunch);

  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {firstLaunch && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboarding"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignupAs" component={SignupAs} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SignupCook" component={SignupCook} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}


