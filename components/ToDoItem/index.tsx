import React, { useState, useEffect, useRef } from "react";
import { View, TextInput } from "react-native";
import { Appearance } from "react-native-appearance";
import CheckBox from "../Checkbox";

interface ToDoItemProps {
	todo: {
		id: string;
		content: string;
		isCompleted: boolean;
	};
	onSubmit: () => void;
}

const TodoItem = ({ todo, onSubmit }: ToDoItemProps) => {
	const [isChecked, setIsChecked] = useState(false);
	const [content, setContent] = useState("");

	const input = useRef<any>(null);

	let colorScheme = Appearance.getColorScheme();
	let modeBasedColor = colorScheme === "light" ? "black" : "white";

	useEffect(() => {
		if (!todo) return;
		setIsChecked(todo.isCompleted);
		setContent(todo.content.toUpperCase());
	}, [todo]);

	useEffect(() => {
		if (input.current) input?.current?.focus();
	}, [input]);

	const onkeypress = ({ nativeEvent }: any) => {
		if (nativeEvent.key === "Backspace" && content === "") {
			// Delete item

			console.log("delete item");
		}
	};

	return (
		<View
			style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}
		>
			{/* //ToDo CheckBox */}

			<CheckBox
				isChecked={isChecked}
				onPress={() => {
					setIsChecked(!isChecked);
				}}
			/>

			{/* //ToDo Text Input */}
			<TextInput
				ref={input}
				value={content}
				onChangeText={setContent}
				style={{
					flex: 1,
					fontSize: 18,
					color: modeBasedColor,
					marginLeft: 12,
				}}
				multiline
				onSubmitEditing={onSubmit}
				blurOnSubmit
				onKeyPress={onkeypress}
			/>
		</View>
	);
};

export default TodoItem;
