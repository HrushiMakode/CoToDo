import * as React from "react";
import { useState } from "react";
import {
	Keyboard,
	View,
	FlatList,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
} from "react-native";

import { Appearance } from "react-native-appearance";

import TodoItem from "../components/ToDoItem";
import KeyboardAvoidingWrapper from "../components/UI-Helper/KeyboardAvoidingWrapper";

let colorScheme = Appearance.getColorScheme();
console.table(colorScheme);
let modeBasedColor = colorScheme === "light" ? "black" : "white";

export default function ToDoScreen() {
	const [title, setTitle] = useState("Why");

	const [todos, setTodos] = useState([
		{
			id: "1",
			content: "Buy Milk",
			isCompleted: true,
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
		setTodos((todos) => {
			const newTodos = [...todos];
			newTodos.splice(atIndex, 0, {
				id: String(Math.random() * 1000000000000),
				content: "",
				isCompleted: false,
			});
			return newTodos;
		});
	};

	return (
		<KeyboardAvoidingWrapper>
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
		</KeyboardAvoidingWrapper>
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
