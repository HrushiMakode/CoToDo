import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoidingWrapper from "../components/UI-Helper/KeyboardAvoidingWrapper";

export default function SignInScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation();
	const passwordRef = useRef<TextInput>(null);

	const onSubmit = () => {
		//submit
		setEmail("");
		setPassword("");
		console.log(email, password);
	};

	return (
		<KeyboardAvoidingWrapper>
			<View style={styles.container}>
				<StatusBar style="light" backgroundColor="#00235E" />
				<View style={styles.bigCircle}></View>
				<View style={styles.smallCircle}></View>
				<View style={styles.centerizedView}>
					<View style={styles.authBox}>
						<View style={styles.logoBox}>
							<Icon color="#fff" name="tasks" type="font-awesome" size={50} />
						</View>
						<Text style={styles.loginTitleText}>Sign In</Text>
						<View style={styles.hr}></View>
						<View style={styles.inputBox}>
							<Text style={styles.inputLabel}>Email</Text>
							<TextInput
								value={email}
								onChangeText={setEmail}
								autoFocus={true}
								style={styles.input}
								keyboardType="email-address"
								textContentType="emailAddress"
								onSubmitEditing={() => passwordRef.current?.focus()}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.inputLabel}>Password</Text>
							<TextInput
								ref={passwordRef}
								value={password}
								onChangeText={setPassword}
								style={styles.input}
								secureTextEntry={true}
								textContentType="password"
								onSubmitEditing={onSubmit}
							/>
						</View>
						<TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
							<Text style={styles.loginButtonText}>Sign In</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
							<Text style={styles.registerText}>
								Don't have an account? Sign Up
							</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</KeyboardAvoidingWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	statusBar: {
		backgroundColor: "red",
	},
	bigCircle: {
		width: Dimensions.get("window").height * 0.7,
		height: Dimensions.get("window").height * 0.7,
		backgroundColor: "#acc2e6",
		borderRadius: 1000,
		position: "absolute",
		right: Dimensions.get("window").width * 0.25,
		top: -50,
	},
	smallCircle: {
		width: Dimensions.get("window").height * 0.4,
		height: Dimensions.get("window").height * 0.4,
		backgroundColor: "#5a8de0",
		borderRadius: 1000,
		position: "absolute",
		bottom: Dimensions.get("window").width * -0.2,
		right: Dimensions.get("window").width * -0.3,
	},
	centerizedView: {
		width: "100%",
		top: "20%",
	},
	authBox: {
		width: "80%",
		backgroundColor: "#fafafa",
		borderRadius: 20,
		alignSelf: "center",
		paddingHorizontal: 14,
		paddingBottom: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.55,
		shadowRadius: 3.84,
		elevation: 10,
	},
	logoBox: {
		width: 100,
		height: 100,
		backgroundColor: "#2b6acf",
		borderRadius: 1000,
		alignSelf: "center",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		top: -50,
		marginBottom: -50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	loginTitleText: {
		fontSize: 26,
		fontWeight: "bold",
		marginTop: 10,
	},
	hr: {
		width: "100%",
		height: 0.5,
		backgroundColor: "#444",
		marginTop: 6,
	},
	inputBox: {
		marginTop: 10,
	},
	inputLabel: {
		fontSize: 18,
		marginBottom: 6,
	},
	input: {
		width: "100%",
		height: 40,
		backgroundColor: "#dfe4ea",
		borderRadius: 4,
		paddingHorizontal: 10,
	},
	loginButton: {
		backgroundColor: "#2b6acf",
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	loginButtonText: {
		color: "#fff",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	},
	registerText: {
		textAlign: "center",
		marginTop: 20,
		fontSize: 16,
	},
	forgotPasswordText: {
		textAlign: "center",
		marginTop: 12,
		fontSize: 16,
	},
});
