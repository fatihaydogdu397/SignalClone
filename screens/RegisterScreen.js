import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <Text h1 style={{ marginBottom: 50 }}>Create a Signal account</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    type="text"
                    autoFocus
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder='Full Name'
                    type="text"
                    autoFocus
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder='Full Name'
                    type="text"
                    autoFocus
                    value={name}
                    onChangeText={(text) => setName(text)}
                />  <Input
                    placeholder='Full Name'
                    type="text"
                    autoFocus
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
        </KeyboardAvoidingView>

    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {

    }
})
