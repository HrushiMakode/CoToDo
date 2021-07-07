import * as React from "react";
import { useState } from "react";
import { Appearance, FlatList, StyleSheet } from "react-native";
import ProjectItem from "../components/ProjectItem";
import { Text, View } from "../components/Themed";
import KeyboardAvoidingWrapper from "../components/UI-Helper/KeyboardAvoidingWrapper";

let colorScheme = Appearance.getColorScheme();
console.table(colorScheme);
let modeBasedColor = colorScheme === "light" ? "black" : "white";

export default function ProjectScreen() {
	const [project, setProject] = useState([
		{
			id: "1",
			title: "Project 1",
			createdAt: "2d",
		},
		{
			id: "2",
			title: "Project 2",
			createdAt: "2d",
		},
		{
			id: "3",
			title: "Project 3",
			createdAt: "2d",
		},
	]);

	return (
		<KeyboardAvoidingWrapper>
			<View style={styles.container}>
				<FlatList
					data={project}
					renderItem={({ item }) => <ProjectItem project={item} />}
					style={{ width: "100%" }}
				></FlatList>
			</View>
		</KeyboardAvoidingWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
