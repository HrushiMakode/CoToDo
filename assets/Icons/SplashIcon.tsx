import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const SplashIcon = () => {
	const xml = `		
	<svg
		width="104"
		height="104"
		viewBox="0 0 104 104"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M103.283 43.9778C103.689 46.5968 103.963 49.2629 103.963 52C103.963 80.7182 80.6895 104 51.9815 104C23.2735 104 0 80.7182 0 52C0 23.2818 23.2735 0 51.9815 0C63.0725 0 73.3317 3.50291 81.7717 9.42146L75.0519 16.3091C68.3982 11.9931 60.4876 9.45454 51.9815 9.45454C28.5331 9.45454 9.45119 28.5432 9.45119 52C9.45119 75.4568 28.5331 94.5454 51.9815 94.5454C75.1086 94.5454 93.9401 75.9768 94.4647 52.9691L103.283 43.9778ZM96.4686 16.3091L54.3444 61.3438L32.23 40.2188L21.5581 48.6437L54.3444 80.3637L90.2662 40.2188L96.4686 16.3091Z"
			fill="#6A96D7"
		/>
	</svg>`;

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<SvgXml xml={xml} width="104" height="104" />
		</View>
	);
};

export default SplashIcon;
