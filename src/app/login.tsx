import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import InputPhone from "@/components/ui/input-phone";
import { useRouter } from "expo-router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pressable, SafeAreaView, Text, View } from "react-native";

export default function Login() {
    const router = useRouter();

    const { control, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<unknown> = (data) => {
        console.log(data);
    };

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
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
                <Button title="Продолжить" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    );
}
