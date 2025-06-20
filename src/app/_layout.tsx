import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

import "react-native-reanimated";
import "../../global.css";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "rgb(255, 255, 255)",
        primary: "rgb(255, 255, 255)",
    },
};

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <Provider store={store}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 20} style={{ flex: 1 }}>
                <ThemeProvider value={MyTheme}>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="index"
                            options={{
                                title: "Onboarding",
                            }}
                        />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                    <StatusBar style="dark" />
                </ThemeProvider>
            </KeyboardAvoidingView>
        </Provider>
    );
}
