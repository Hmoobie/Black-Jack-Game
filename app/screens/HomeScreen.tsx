import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text>Welcome to Blackjack!</Text>
            <Button
                title="Start Game"
                onPress={() => navigation.navigate("GameScreen")}
            />
        </View>
    );
};

export default HomeScreen;