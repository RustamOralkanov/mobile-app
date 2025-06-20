import React from "react";
import { ScrollView, View } from "react-native";

export default function Buy() {
    return (
        <ScrollView>
            {[...Array(15)].map((_, i) => (
                <View key={i} className="h-[100px] bg-gray-100 rounded-xl mb-1"></View>
            ))}
        </ScrollView>
    );
}
