import React from "react";
import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const SafeScreen = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100, paddingHorizontal: 20 }} nestedScrollEnabled keyboardShouldPersistTaps="handled">
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SafeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 60 : 0,
    },
});
