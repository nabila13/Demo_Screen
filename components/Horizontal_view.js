import React from "react";
import {
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from "react-native";
import { Card } from "react-native-elements";
import Touch from "./Touch";

function Horizontal_view() {
	const options = [
		{
			id: 1,
			tag: "All",
		},
		{
			id: 2,
			tag: "Design",
		},
		{
			id: 3,
			tag: "Data Analyst",
		},
		{
			id: 4,
			tag: "Software engineer",
		},
		{
			id: 5,
			tag: "Cloud architect",
		},
		{
			id: 6,
			tag: "Developer",
		},
	];

	return (
		<View style={styles.container}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{options.map((option) => {
					return (
						<View>
							<Touch option={option.tag}></Touch>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 80,
		// paddingHorizontal: 10,
		// paddingVertical: 5,
		backgroundColor: "transparent",
		flexDirection: "row",
		marginHorizontal: 10,
		justifyContent: "space-around",
		// marginHorizontal: 10,
		// marginVertical: 10,
	},
});
export default Horizontal_view;
