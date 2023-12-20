import React, { useState, useRef } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

import { Formik } from 'formik';


export default function Login({navigation}) {

    const [errors, setErrors] = useState({});

    const url = 'http://192.168.1.3:8001/api'

    console.log('errors', errors)
    return (
        <View>
            <Image source={require('../../assets/logo.png')} style={styles.screenLogo} />
            <Text style={styles.screenSubtitle}>Please log in to contnue using our app</Text>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    remember: false
                }}
                style={styles.formContainer}
                onSubmit={values => {
                    axios({
                        method: 'post',
                        url: `${url}/auth/login`,
                        data: values,
                    }).then((response) => {
                        console.log(response.data);
                    }).catch(error => {
                        console.log(error.response.data)
                        error?.response?.data?.errors && setErrors(error.response.data.errors)
                        error?.response?.data?.message && alert(error?.response?.data?.message)
                    })
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors['email'] && (errors['email'].map((err, ind) =>
                            <Text key={ind} style={styles.errorText}>{err}</Text>
                        ))}
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />

                        {errors['password'] && (errors['password'].map((err, ind) =>
                            <Text key={ind} style={styles.errorText}>{err}</Text>
                        ))}
                        <BouncyCheckbox
                            fillColor="#FBC400"
                            style={{ marginHorizontal: 15 }}
                            onPress={(value) => setFieldValue('remember', value)}
                            text="Remember me"
                        />
                        <Text style={{ alignSelf: 'flex-end', marginHorizontal: 15, marginTop: 20, ...styles.link }}>Forgot Password?</Text>

                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{ alignSelf: 'flex-end', marginHorizontal: 15, marginTop: 20, }} >
                            Don’t have an account?
                            <Text onPress={()=>navigation.navigate('SignupAs')} style={styles.link}>Signup</Text>
                        </Text>

                    </View>
                )
                }
            </Formik >
        </View >
    )
}


const styles = StyleSheet.create({
    screenLogo: {
        marginTop: '10%',
        width: '100%',
        height: '30%',
        resizeMode: 'contain',
    },
    screenSubtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
        fontWeight: '300'
    },
    button: {
        elevation: 8,
        backgroundColor: "#FBC400",
        borderRadius: 15,
        paddingVertical: 22,
        marginHorizontal: 40,
        marginTop: 60,
    },
    buttonText: {
        fontSize: 25,
        alignSelf: "center"
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 15,
        color: 'black'
    },
    errorText: {
        color: 'red',
        borderRadius: 10,
        marginHorizontal: 15,
    },
    link: {
        color: '#C19702',
        fontSize: 20
    }
});