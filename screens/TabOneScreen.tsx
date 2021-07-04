import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import {
	Platform,
	FlatList,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";

import { Appearance } from "react-native-appearance";

import TodoItem from "../components/ToDoItem";

let id = "4";
let colorScheme = Appearance.getColorScheme();
console.table(colorScheme);
let modeBasedColor = colorScheme === "light" ? "black" : "white";

export default function TabOneScreen() {
	const [title, setTitle] = useState("Why");

	const [todos, setTodos] = useState([
		{
			id: "1",
			content: "Buy Milk",
			isCompleted: false,
		},
		{
			id: "2",
			content: "Buy Cereals",
			isCompleted: false,
		},
		{
			id: "3",
			content: "Go to Gym",
			isCompleted: false,
		},
	]);

	const createNewItem = (atIndex: number) => {
		console.log(`new item ${atIndex}`);
		const newTodos = [...todos];
		newTodos.splice(atIndex, 0, {
			id: String(Math.random() * 1000000000000),
			content: "",
			isCompleted: false,
		});
		setTodos(newTodos);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 150}
			style={{ flex: 1 }}
		>
			{/* <ScrollView contentContainerStyle={{ flex: 1 }}> */}
			<View style={styles.container}>
				<TextInput
					style={styles.title}
					value={title}
					onChange={({ nativeEvent }) => setTitle(nativeEvent.text)}
					placeholder={"Title"}
					placeholderTextColor={
						modeBasedColor === "white" ? "#514747" : "#BDB6B6"
					}
				/>
				<FlatList
					data={todos}
					renderItem={({ item, index }) => (
						<TodoItem todo={item} onSubmit={() => createNewItem(index + 1)} />
					)}
					style={{
						width: "100%",
					}}
				/>
			</View>
			{/* </ScrollView> */}
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 12,
	},
	title: {
		width: "100%",
		fontSize: 20,
		color: modeBasedColor,
		fontWeight: "bold",
		marginBottom: 12,
	},
});
