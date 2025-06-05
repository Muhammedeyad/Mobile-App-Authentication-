
import React from 'react';


export const useRegisterHook = () => {
    async function useRegister(userData, navigation) { 
        try {
            if(!isValidData(userData)){
                return 
            }
            const res = await fetch("http://192.168.43.87:5000/authentication/api/register", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({username: userData.username, password: userData.password, confirmPassword: userData.confirmPassword})
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }          
            alert("user registered")       
            navigation.navigate("login")
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }
    return {useRegister}
}


function isValidData(userData){
    if(!userData.username  || !userData.password || !userData.confirmPassword){
        alert("all fields must be required")
        return false
    }
    if(userData.password != userData.confirmPassword){
        alert('confirm password must be same!')
        return false
    }
    return true
}