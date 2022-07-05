import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons, Feather, EvilIcons } from "@expo/vector-icons";

const Single_Card = (props) => {
	const { status, location, firstTag, secondTag } = props;

	return (
		<View>
			<Card containerStyle={styles.card}>
				<View style={styles.first}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "flex-start",
							alignItems: "center",
						}}>
						<MaterialCommunityIcons
							name='dots-triangle'
							size={34}
							color='cyan'
						/>
						<View style={{ marginLeft: 10 }}>
							<Text>Atlassian</Text>
							<Text style={{ fontSize: 20 }}>{status}</Text>
						</View>
					</View>
					<Feather name='heart' size={24} color='black' />
				</View>
				<View style={{ flexDirection: "row", marginBottom: 10 }}>
					<EvilIcons name='location' size={26} color='cyan' />
					<Text style={{ marginLeft: 10 }}>{location}</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Text
						style={{
							backgroundColor: "#c0fff7",
							marginHorizontal: 10,
							padding: 5,
							borderRadius: 10,
							color: "#009c6b",
						}}>
						{firstTag}
					</Text>
					<Text
						style={{
							backgroundColor: "#c0fff7",
							marginHorizontal: 10,
							padding: 5,
							borderRadius: 10,
							color: "#009c6b",
						}}>
						{secondTag}
					</Text>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		marginVertical: 20,
		backgroundColor: "#fff",
		height: 170,
		color: "black",
		marginBottom: 10,
	},
	first: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		height: 80,
	},
});
export default Single_Card;
