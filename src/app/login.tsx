import { usePostLoginMutation } from "@/api/auth.api";
import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import InputPhone from "@/components/ui/input-phone";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Platform, Pressable, SafeAreaView, Text, View } from "react-native";

export default function Login() {
    const router = useRouter();
    const [postLogin, { isLoading }] = usePostLoginMutation();

    const { control, handleSubmit, setError } = useForm();

    const isAuth = async (token: string) => {
        await AsyncStorage.setItem("token", token);
    };

    const onSubmit: SubmitHandler<{ phone: string; password: string }> = async (data) => {
        const preparedData = {
            phone: data?.phone?.replace(/[^\d+]/g, ""),
            password: data?.password,
        };

        try {
            const response = await postLogin(preparedData).unwrap();
            await isAuth(response?.data?.token);
            router.replace("/(tabs)");
            console.log(response);
        } catch (error) {
            const newError = error as { data: { message: string } };
            const message = newError?.data?.message || "Произошла ошибка";

            setError("phone", { type: "manual", message });
            setError("password", { type: "manual", message });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, paddingTop: Platform.OS === "android" ? 60 : 0, paddingBottom: Platform.OS === "android" ? 60 : 0 }}>
            <View className="flex-1 items-start justify-between">
                <View>
                    <Pressable className="flex-row items-center gap-2.5" onPress={() => router.replace("/")}>
                        <ArrowLeftIcon />
                        <Text className="text-gray-900 text-[16px] font-bold">Авторизация</Text>
                    </Pressable>
                    <View className="gap-6 mt-10">
                        <View className="gap-3">
                            <Text className="text-gray-900 text-[32px] font-bold">Введите номер телефона и пароль</Text>
                            <Text className="text-gray-900 text-sm">Чтобы войти или зарегистрироваться</Text>
                        </View>
                        <View className="gap-3">
                            <InputPhone
                                name="phone"
                                placeholder="Номер телефона"
                                control={control}
                                rules={{
                                    required: "Номер телефона обязателен",
                                }}
                            />
                            <Input
                                name="password"
                                placeholder="Пароль"
                                control={control}
                                secureTextEntry
                                rules={{
                                    required: "Пароль обязателен",
                                    minLength: {
                                        value: 8,
                                        message: "Пароль должен быть не менее 8 символов",
                                    },
                                }}
                            />
                        </View>
                    </View>
                </View>
                <Button
                    title="Продолжить"
                    // Приводим onSubmit к типу SubmitHandler<FieldValues>, чтобы устранить ошибку типов
                    onPress={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
                    disabled={isLoading}
                    loading={isLoading}
                />
            </View>
        </SafeAreaView>
    );
}
