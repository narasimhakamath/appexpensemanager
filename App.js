import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import MainRoute from "./navigators/MainRoute";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const fonts = {
	'abelRegular': require("./assets/fonts/Abel-Regular.ttf"),
}

const fetchFonts = () => Font.loadAsync(fonts);

export default function App() {

	const [isFontLoaded, loadFonts] = useState(false);
	if(!isFontLoaded)
		return <AppLoading startAsync={fetchFonts} onFinish={() => loadFonts(true)} />

	return (
		<MainRoute />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
