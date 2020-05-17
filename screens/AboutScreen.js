import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { hide } from "expo/build/launch/SplashScreen";

const AboutScreen = props => {
	return(
		<View style={styles.screen}>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image style={styles.profileImage} source={{uri: "https://avatars3.githubusercontent.com/u/38852388?s=400&u=22355bce8bccf8041562445a703c4670f88ac8ea&v=4"}} />
				</View>
				<Text style={styles.aboutText}>This is a demo application that has been designed entirely with JavaScript frameworks.</Text>
				<Text style={styles.aboutText}>The app design and implementation is done using Expo built for React Native which can run on both Android and iOS devices.</Text>
				<Text style={styles.aboutText}>The backend server is created using ExpressJS, and MongoDB is used for the data strcutures.</Text>
				<Text style={styles.aboutText}>Visit: https://github.com/narasimhakamath for more!</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	container: {
		marginLeft: 30,
		marginRight: 30
	},
	aboutText: {
		paddingVertical: 10,
		textAlign: "center",
		fontFamily: "abelRegular",
		fontSize: 16
	},
	profileImage: {
		width: "100%",
		height: "100%",
	},
	imageContainer: {
		height: 200,
		width: 200,
		alignSelf: "center",
		borderRadius: 200,
		overflow: "hidden",
		marginBottom: 20
	}
});

export default AboutScreen;