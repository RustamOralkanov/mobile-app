import { Tabs } from "expo-router";
import { Platform, SafeAreaView } from "react-native";

export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: Platform.select({
                        ios: {
                            // Use a transparent background on iOS to show the blur effect
                            position: "absolute",
                        },
                        default: {},
                    }),
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}
