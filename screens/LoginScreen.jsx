const { Text, StyleSheet, View, Image, TextInput, Button, ScrollView, KeyboardAvoidingView } = require("react-native")

import { useState } from 'react'
import { useLoginHook } from '../hooks/useLoginHook'
import loginimage from './../assets/loginimage.png'
export const LoginScreen = ({navigation}) => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })
    const {useLogin} = useLoginHook()
     const handleLogin =async ()=>{
        await useLogin(userData, navigation)
    }

    return (
        <ScrollView>
        <KeyboardAvoidingView>
        <View style={styles.container}>
            
            <View style={styles.image}>
                <Image style={{ width: 200, height: 200 }} source={loginimage} />
            </View>
            <Text style={{ paddingHorizontal: 20, fontFamily: "mono", fontSize: 19, fontWeight: "bold", color: "blue", marginBottom: 10 }}>Login Now !!! </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter Your Username" style={styles.input} onChangeText={(text)=> setUserData({...userData, username:text})}/>
                <TextInput placeholder="Enter Your Password" style={styles.input} onChangeText={(text)=> setUserData({...userData, password:text})} secureTextEntry={true}/>
        
            </View>
            <View style={styles.buttonContainer}>
                <Text title='Log in' style={styles.loginbtn} onPress={()=> handleLogin()}>Log in</Text>
            </View>
            <Text style={styles.text} onPress={()=> navigation.navigate('register')}  >Don't have an account, Register here!</Text>
        </View>
        
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 1000,
        display: "flex",
        flexDirection: "column",
    },
    image: {
        marginTop: 70,
        marginBottom: 20,
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 100,
        width: 350
    },
    inputContainer: {
        marginTop: 10,
        width: 400,
        alignItems: "center",
        display: "flex",
        gap: 20
    },
    buttonContainer: {
        display: 'flex',
        alignItems: "center",
        marginTop: 20
    },
    loginbtn: {
        marginVertical: 20,
        backgroundColor: "blue",
        color: "white",
        fontWeight: "bold",
        paddingVertical:10,
        paddingHorizontal: 30,
        borderRadius:100,
        width: 200,
        textAlign: "center",
        fontSize: 13
    } ,
    text: {
        marginVertical: 20,
        textAlign: 'center',
        textDecoration: "underline",
        color: 'blue',
        fontWeight: 'thin',
        textDecorationLine: "underline"
    }
})