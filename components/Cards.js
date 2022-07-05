import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Single_Card from "./Single_Card";
const Cards = () => {
	const items = [
		{
			id: 1,
			status: "system designer",
			location: "Sydney, Australia",
			firstTag: "freelancer",
			secondTag: "full-Time",
		},
		{
			id: 2,
			status: "UI/ UX designer",
			location: "Melbourne, Australia",
			firstTag: "full-Time",
			secondTag: "remote",
		},
		{
			id: 3,
			status: "Web designer",
			location: "New York, USA",
			firstTag: "freelancer",
			secondTag: "full-Time",
		},
	];
	return (
		<View>
			{items.map((item) => {
				return (
					<View>
						<Single_Card
                        status={item.status}
                        location={item.location}
                        firstTag={item.firstTag}
                        secondTag={item.secondTag}
                        ></Single_Card>
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	cardStyle: {
		backgroundColor: "#FFFFFF",
		padding: 10,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0,
	},
});
export default Cards;
