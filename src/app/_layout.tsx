import { GestureHandlerRootView } from "react-native-gesture-handler";

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

import "react-native-reanimated";
import "../../global.css";
import "../../reanimatedConfig";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "rgb(255, 255, 255)",
        primary: "rgb(255, 255, 255)",
    },
};

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <Provider store={store}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 20} style={{ flex: 1 }}>
                <ThemeProvider value={MyTheme}>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                            <Stack.Screen name="login" options={{ headerShown: false }} />
                            <Stack.Screen name="projects" options={{ headerShown: false }} />
                            <Stack.Screen name="project-details" options={{ headerShown: false }} />
                        </Stack>
                    </GestureHandlerRootView>
                    <StatusBar style="dark" />
                </ThemeProvider>
            </KeyboardAvoidingView>
        </Provider>
    );
}
