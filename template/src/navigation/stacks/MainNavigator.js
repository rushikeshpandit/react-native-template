import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import Colors from "../../util/Colors";
import { AuthProvider } from "../../context/auth/AuthProvider";
import useLoader from "../../hooks/useLoader";
import { useDispatch, useSelector } from "react-redux";
import StackNavigator from "./StackNavigator"

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    const [loader, showLoader, hideLoader] = useLoader()
    const userSlice = useSelector(state => state.userSlice)

    useEffect(() => {
        userSlice.isLoading === true ? showLoader() : hideLoader()
    }, [userSlice, hideLoader, showLoader])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={Colors.Defaultbg}
                barStyle="light-content"
            />
            <AuthProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="StackNavigator" component={StackNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
                {loader}
            </AuthProvider>
        </View>
    );
}
