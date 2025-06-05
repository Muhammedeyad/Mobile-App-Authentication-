import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'

export const Dashboard = () => {
  const [userData, setUserData] = useState({
    username: "",
    registerAt: ""
  })

  async function getUserData(){
    const data = await AsyncStorage.getItem("authUser")
    if(data){
      setUserData({username: JSON.parse(data).username, registerAt: JSON.parse(data).createdAt})
    }
  }
  useEffect(()=>{
    getUserData()
  }, [])
  return (
    <>
    <Text>Username: {userData.username} </Text>
    <Text>Registered At:{userData.registerAt} </Text>
    </>
    
  )
}
