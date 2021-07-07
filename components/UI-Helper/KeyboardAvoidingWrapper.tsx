import React, { ReactElement, useRef } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";

interface AuxProps {
	children: ReactElement | ReactElement[];
}

const KeyboardAvoidingWrapper = ({ children }: AuxProps) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "android" ? "height" : "padding"}
			enabled
			style={{ flexGrow: 1, height: "100%" }}
		>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					{children}
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default KeyboardAvoidingWrapper;
