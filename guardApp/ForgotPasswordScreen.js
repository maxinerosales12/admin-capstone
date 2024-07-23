import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'C:\Users\Maxine\OneDrive\Desktop\capstone2\guardApp\firebaseAuthConfig.js'; // Adjust the path as needed

const { width } = Dimensions.get('window');

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent. Please check your email.');
        } catch (error) {
            setMessage('Error sending password reset email. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
                <Text style={styles.buttonText}>Send Reset Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back to Login</Text>
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
    backButton: {
        marginTop: 10,
    },
    backButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
    message: {
        color: 'green',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default ForgotPasswordScreen;
