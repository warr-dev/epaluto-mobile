import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik';

export default function Signup({navigation}) {
    return (
        <ScrollView style={{ flex: 1, height: '100%' }}>
            <Image source={require('../../assets/logo.png')}
                style={styles.screenLogo} />
            <Text style={styles.screenTitle}>Create an account</Text>
            <Text style={styles.screenSubtitle}>Please fill the details and create account</Text>
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
                    <View style={{ marginVertical: 20 }}>
                        <TextInput
                            style={styles.input}
                            placeholder='Last Name'
                            value={values.last_name}
                            onChangeText={handleChange('last_name')}
                            onBlur={handleBlur('last_name')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='first_name'
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='middle_name'
                            value={values.middle_name}
                            onChangeText={handleChange('middle_name')}
                            onBlur={handleBlur('middle_name')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='mobile'
                            value={values.mobile}
                            onChangeText={handleChange('mobile')}
                            onBlur={handleBlur('mobile')}
                        /><TextInput
                            style={styles.input}
                            placeholder='address'
                            value={values.address}
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='password_confirmation'
                            value={values.password_confirmation}
                            onChangeText={handleChange('password_confirmation')}
                            onBlur={handleBlur('password_confirmation')}
                        />
                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Signup</Text>
                        </TouchableOpacity>
                        <Text style={{ alignSelf: 'flex-end', marginHorizontal: 15, marginTop: 20, }} >
                            Already have an account?
                            <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Signin</Text>
                        </Text>
                    </View>
                )
                }
            </Formik >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screenLogo: {
        marginVertical: '-40%',
        width: '100%',
        // height: '50%',
        resizeMode: 'center',
    },
    screenTitle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '500',
    },
    screenSubtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
        fontWeight: '300'
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
    button: {
        elevation: 8,
        backgroundColor: "#FBC400",
        borderRadius: 15,
        paddingVertical: 22,
        marginHorizontal: 40,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 25,
        alignSelf: "center"
    },
    link: {
        color: '#C19702',
        fontSize: 20
    }
});