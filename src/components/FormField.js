import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function FormField({ formState, handler }) {
    return (
        <View style={styles.container}>
            {Object.entries(formState).map(([field, value]) => (
                <View key={field}>
                    <TextInput
                        style={styles.input}
                        placeholder={field} value={value}
                        onChange={(e) => handler(e)}
                    />
                </View>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:50,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 15,
    }

});