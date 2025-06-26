import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import ArrowLeftIcon from "../icons/arrow-left-icon";

const PageHead = ({ title }: { title: string }) => {
    const router = useRouter();
    return (
        <Pressable className="flex-row gap-[10px] items-center py-[14px] backdrop-blur-sm" onPress={() => router.back()}>
            <ArrowLeftIcon />
            <Text className="text-[16px] font-bold text-gray-900">{title}</Text>
        </Pressable>
    );
};

export default PageHead;
