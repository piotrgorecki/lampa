import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
