import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import SplashIcon from "../assets/Icons/SplashIcon";

const SplashScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		const authUser = async () => {
			const screen = (await isAuthenticated()) ? "Home" : "SignUp";
			navigation.navigate(screen);
		};
		authUser();
	}, []);

	const isAuthenticated = async () => {
		const token = await AsyncStorage.getItem("token");
		return !!token;
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
