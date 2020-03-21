import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
