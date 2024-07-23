// App.js or your main navigation file
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GuardLoginScreen from './GuardLoginScreen'; // Adjust the path as needed
import GuardSignUpScreen from './GuardSignUpScreen'; // Adjust the path as needed
import GuardScreen from './GuardScreen'; // Adjust the path as needed
import ForgotPasswordScreen from './ForgotPasswordScreen'; // Adjust the path as needed

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GuardLoginScreen">
                <Stack.Screen name="GuardLoginScreen" component={GuardLoginScreen} />
                <Stack.Screen name="GuardSignUpScreen" component={GuardSignUpScreen} />
                <Stack.Screen name="GuardScreen" component={GuardScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
