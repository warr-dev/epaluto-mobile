import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignupAs({navigation}) {
    return (
        <View>
            <Image source={require('../../assets/logo.png')} style={styles.screenLogo} />
            <Text style={styles.screenTitle}>Signup As</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{...styles.button,backgroundColor:'#78CD5B'}}>
                <Text style={styles.buttonText}>As Customer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignupCook')} style={styles.button}>
                <Text style={styles.buttonText}>As Cook</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screenLogo: {
        marginTop: '10%',
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
    },
    screenTitle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '500',
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
    }
});