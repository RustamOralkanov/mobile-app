import Button from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

const ONBOARDING_KEY = "onboarding_language";
const AUTH_KEY = "is_authenticated";

const Onboarding = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await AsyncStorage.getItem(AUTH_KEY);

            if (isAuth === "true") {
                router.replace("/");
            } else {
                setLoading(false);
            }
        };
        checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectLanguage = async (lang: string) => {
        await AsyncStorage.setItem(ONBOARDING_KEY, lang);
        router.replace("/login");
    };

    if (loading) return null;

    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-primary-500 justify-end">
            <View className="flex-1 items-center justify-end gap-3 px-5">
                <Text>Выберите язык / Тілді таңдаңыз</Text>
                <Button title="Русский" onPress={() => selectLanguage("ru")} type="secondary" />
                <Button title="Қазақша" onPress={() => selectLanguage("kz")} type="secondary" />
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;
