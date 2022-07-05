import React from "react";
import {
	View,
	StyleSheet,
	Button,
	Text,
	TouchableOpacity,
	onPress,
} from "react-native";
const Touch = (props) => {
	const { option } = props;
	console.log("hello from the other side");
	return (
		<View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => console.log("pressed!")}>
				<Text>{option}</Text>
				{console.log("check: " + JSON.stringify(option))}
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: "white",
		marginHorizontal: 5,
		borderColor: "lightgray",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		padding: 5,
		marginVertical: 10,
	},
});
export default Touch;
