import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'C:\Users\Maxine\OneDrive\Desktop\capstone2\guardApp\firebaseAuthConfig.js'; // Adjust the path as needed

const { width } = Dimensions.get('window');

const GuardLoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('GuardScreen'); // Navigate to GuardScreen on successful login
        } catch (error) {
            setErrorMessage('Your email or password are incorrect.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guard Login</Text>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TextInput
                placeholder="Email or Username"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <Text style={styles.forgotButtonText}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('GuardSignUpScreen')}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'beige',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotButton: {
        marginTop: 10,
    },
    forgotButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
    signUpButton: {
        marginTop: 10,
    },
    signUpButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default GuardLoginScreen;
