import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Icon, Text } from "galio-framework";
import { AntDesign, Feather, EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Horizontal_view from "./components/Horizontal_view";
import Cards from "./components/Cards";
export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.first_box}>
					<AntDesign name='arrowleft' size={24} color='black' />
					<Text h5>Atlassian</Text>
					<Feather name='search' size={24} color='black' />
				</View>
				<View style={styles.second_box}>
					<TextInput
						autoCorrect={false}
						underlineColorAndroid='transparent'
						style={styles.searchbar}
						placeholder='All locations'
						left={
							<TextInput.Icon
								name={() => (
									<EvilIcons name='location' size={34} color='cyan' />
								)}
							/>
						}
					/>
				</View>
				<Horizontal_view />
				<Cards />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	first_box: {
		height: 70,
		margin: 10,
		padding: 10,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		paddingVertical: 20,
		backgroundColor: "#C8E6EF",
	},
	second_box: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		borderRadius: 10,
		flex: 1,
		marginHorizontal: 5,
		padding: 5,
		border: 2,
	},
	searchbar: {
		backgroundColor: "transparent",
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		borderTopWidth: 2,
		borderRadius: 5,
		flex: 1,
		borderColor: "lightgray",
	},
});
