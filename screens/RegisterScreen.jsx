const { Text, StyleSheet, View, Image, TextInput, Button, ScrollView, KeyboardAvoidingView } = require("react-native")

import loginimage from './../assets/loginimage.png'
export const RegisterScreen = () => {
    return (
        <ScrollView>
        <KeyboardAvoidingView>
        

        <View style={styles.container}>
            
            <View style={styles.image}>
                <Image style={{ width: 200, height: 200 }} source={loginimage} />
            </View>
            <Text style={{ paddingHorizontal: 20, fontSize: 23, fontWeight: "bold", color: "purple" }}>Register !!! </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter Your Username" style={styles.input} />
                <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry={true}/>
                <TextInput placeholder="Enter Your Confirm Password" style={styles.input} secureTextEntry={true} />
            </View>
            <View style={styles.buttonContainer}>
                <Text title='Log in' style={styles.loginbtn}>Log in</Text>
            </View>
            <Text style={styles.text}>Already have an account, login here!</Text>
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
        borderWidth: 3,
        borderColor: "violet",
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
        backgroundColor: "violet",
        color: "white",
        fontWeight: "bold",
        paddingVertical:10,
        paddingHorizontal: 30,
        borderRadius:100,
        width: 200,
        textAlign: "center",
        fontSize: 18
    }  ,
    text: {
        marginVertical: 20,
        textAlign: 'center',
        textDecoration: "underline",
        color: 'blue',
        fontWeight: 'bold',
        textDecorationLine: "underline"
    }
})