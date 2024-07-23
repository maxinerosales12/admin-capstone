import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from 'C:\Users\Maxine\OneDrive\Desktop\capstone2\guardApp\firebaseAuthConfig.js'; // Adjust the path as needed
import { db } from 'C:\Users\Maxine\OneDrive\Desktop\capstone2\guardApp\firestoreConfig.js'; // Adjust the path as needed
import { collection, addDoc } from 'firebase/firestore';

const GuardScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [srCode, setSrCode] = useState('');
    const [gsuite, setGsuite] = useState('');
    const [course, setCourse] = useState('');
    const [yearSection, setYearSection] = useState('');
    const [department, setDepartment] = useState('');
    const [violations, setViolations] = useState('');

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.navigate('GuardLoginScreen');
        } catch (error) {
            console.error('Error logging out: ', error);
        }
    };

    const handleSubmit = async () => {
        try {
            // Add a new document with a generated ID
            const docRef = await addDoc(collection(db, 'violators'), {
                name,
                srCode,
                gsuite,
                course,
                yearSection,
                department,
                violations,
                timestamp: new Date()  // Optional: Add a timestamp
            });
            console.log('Document written with ID: ', docRef.id);
            // Clear form after successful submission
            setName('');
            setSrCode('');
            setGsuite('');
            setCourse('');
            setYearSection('');
            setDepartment('');
            setViolations('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Violators Form</Text>
            
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="SR-Code"
                value={srCode}
                onChangeText={setSrCode}
                style={styles.input}
            />
            <TextInput
                placeholder="GSuite Account"
                value={gsuite}
                onChangeText={setGsuite}
                style={styles.input}
            />
            <TextInput
                placeholder="Course"
                value={course}
                onChangeText={setCourse}
                style={styles.input}
            />
            <TextInput
                placeholder="Year/Section"
                value={yearSection}
                onChangeText={setYearSection}
                style={styles.input}
            />
            <TextInput
                placeholder="Department"
                value={department}
                onChangeText={setDepartment}
                style={styles.input}
            />
            <TextInput
                placeholder="Violations"
                value={violations}
                onChangeText={setViolations}
                style={styles.input}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    logoutButton: {
        marginTop: 20,
    },
    logoutButtonText: {
        color: '#ff0000',
        fontSize: 16,
    },
});

export default GuardScreen;
