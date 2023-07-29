import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import UserList from "../../feature/user/UserList";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="UserList" component={UserList} />
        </Stack.Navigator>

    );
}
