import { Text, StyleSheet, View } from 'react-native'

export const CustomDrawer = ({ navigation }) => {
	const listItems = [
		{ itemName: "dashboard", navigateTo: "dashboard" },
		{ itemName: "settings", navigateTo: "settings" },
		{ itemName: "login", navigateTo: 'login'},
		{ itemName: "register", navigateTo: 'register'},
	]
	return (
		<View style={styles.container}>
			<View style={styles.userInfo}>
				<Text style={styles.username}>Mohamed Eyad SA</Text>
				<Text style={styles.email}>samohamedeyad@gmail.com</Text>
			</View>
			<View style={styles.listItems}>
				{
					listItems.map((item, index) => (
						<Text style={styles.listItem} onPress={() => navigation.navigate(item.navigateTo)}>{item.itemName}</Text>
					))
				}
			</View>
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
