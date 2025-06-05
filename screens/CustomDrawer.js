import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const CustomDrawer = ({navigation}) => {
	const listItems = [
		{ itemName: "dashboard", navigateTo: "dashboard" },
		{ itemName: "settings", navigateTo: "settings" },
	]

	async function handleSignout() {
		const data = await AsyncStorage.removeItem("authUser")
		setTimeout(() => {
			navigation.navigate("dashboard")
		}, 500)
		alert("logged out successfully done!")
	}
	return (
		<View style={styles.container}>
			<View style={styles.userInfo}>
				<Text style={styles.username}>Mohamed Eyad SA</Text>
				<Text style={styles.email}>samohamedeyad@gmail.com</Text>
			</View>
			<View style={styles.listItems}>
				{
					listItems.map((item, index) => (
						<Text key={index} style={styles.listItem} onPress={() => navigation.navigate(item.navigateTo)}>{item.itemName}</Text>
					))
				}
			</View>
			<Text style={styles.listItem} onPress={() => handleSignout()}>Sign out</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 50,
		display: "flex",
		flexDirection: "column",
		gap: 20
	},
	userInfo: {
		display: 'flex',
		paddingHorizontal: 20,
	},
	username: {
		fontWeight: "bold",
		fontSize: 17

	},
	email: {
		fontSize: 13
	},
	listItem: {
		color: "gray",
		textAlign: 'start',
		borderColor: "black",
		fontWeight: "bold",
		fontSize: 15,
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	listItems: {
		display: "flex",
		marginTop: 10,
		gap: 20
	}
})
