import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import SplashIcon from "../assets/Icons/SplashIcon";

const SplashScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		const screen = isAuthenticated() ? "Home" : "SignUp";
		navigation.navigate(screen);
	}, []);

	const isAuthenticated = () => {
		return false;
	};

	return (
		<View style={styles.container}>
			<SplashIcon />
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
