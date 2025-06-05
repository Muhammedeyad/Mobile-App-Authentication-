import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLoginHook = () => {
        async function useLogin(userData, navigation) { 
            try {
                if(!isValidData(userData)){
                    return 
                }
                const res = await fetch("http://192.168.43.87:5000/authentication/api/login", {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({username: userData.username, password: userData.password})
                })
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }          
                await AsyncStorage.setItem("authUser", JSON.stringify(data))
                alert("user registered")       
                navigation.navigate("dashboard")
            } catch (error) {
                console.log(error.message)
                alert(error.message)
            }
        }
   return {useLogin}
}


function isValidData(userData){
    if(!userData.username  || !userData.password){
        alert("all fields must be required")
        return false
    }
    return true
}