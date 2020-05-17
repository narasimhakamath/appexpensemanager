import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Header({navigation}) {

	const toggleDrawer = () => navigation.openDrawer();

	return(
		<View style={styles.buttonContainer}>
			<MaterialIcons name="menu" size={28} onPress={toggleDrawer} style={styles.icon}/>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	icon: {
		position: "absolute",
		left: 16
	}
});