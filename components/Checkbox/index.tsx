import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Appearance } from "react-native-appearance";

interface CheckBoxProps {
	isChecked: boolean;
	onPress: () => void;
}

const CheckBox = (props: CheckBoxProps) => {
	let colorScheme = Appearance.getColorScheme();
	let modeBasedColor = colorScheme === "light" ? "black" : "white";

	const name = props.isChecked
		? "checkbox-marked-outline"
		: "checkbox-blank-outline";

	return (
		<Pressable onPress={props.onPress}>
			<View>
				<MaterialCommunityIcons name={name} size={24} color={modeBasedColor} />
			</View>
		</Pressable>
	);
};

export default CheckBox;
