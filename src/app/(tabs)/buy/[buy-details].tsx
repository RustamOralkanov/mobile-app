import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import HeartIcon from "@/components/icons/heart-icon";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const paymentOptions = [
    {
        title: "В рассрочку",
        subtitle: "от 156 700 ₸ / мес.",
        description: "Квартиру можно купить в рассрочку под 0%",
        value: "installment",
    },
    {
        title: "Оплата наличными",
        subtitle: "со скидкой 35 402 840 ₸",
        description: "Квартиру можно купить в ипотеку вместе с дополнительными опциями. Оплата будет включена в ежемесячный платеж.",
        value: "cash",
    },
    {
        title: "В ипотеку:",
        subtitle: "от 156 700 ₸ / мес.",
        description: "Квартиру можно купить в ипотеку вместе с дополнительными опциями. Оплата будет включена в ежемесячный платеж.",
        value: "mortgage",
    },
];

const BuyDetails = ({ id }: { id: string }) => {
    const router = useRouter();

    const [paymentOption, setPaymentOption] = useState("installment");
    const [type, setType] = useState("layout");

    const handleType = (value: string) => {
        setType(value);
    };

    const handlePaymentOption = (value: string) => {
        setPaymentOption(value);
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
            <Pressable className="flex-row gap-[10px] items-center py-[14px] backdrop-blur-sm" onPress={() => router.back()}>
                <ArrowLeftIcon />
                <Text className="text-[16px] font-bold text-gray-900">3-комнатная, 104,5 м2</Text>
            </Pressable>
            <ScrollView contentContainerClassName="pb-[100px]" showsVerticalScrollIndicator={false}>
                <View className="mt-[12px] flex-row justify-between items-center">
                    <View className="flex-row items-center gap-[5px]">
                        <Text className="px-[6px] py-[4px] bg-error-500 rounded-full text-gray-100 text-[12px] leading-[1.1]">Акция</Text>
                        <Text className="px-[6px] py-[4px] bg-warning-500 rounded-full text-gray-100 text-[12px] leading-[1.1]">С отделкой</Text>
                        <Text className="px-[6px] py-[4px] bg-gray-100 rounded-full text-gray-600 text-[12px] leading-[1.1]">Qorem ipsum dolor </Text>
                    </View>
                    <HeartIcon />
                </View>
                <View className="mt-[24px]">
                    <Image
                        source={{ uri: "https://api.ab-capital.kz/storage/plans/68376c3cefe00.png" }}
                        className="w-full h-[200px] rounded-[5px]"
                        style={{
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <View className="flex-row items-center mt-[24px]">
                    {[
                        { label: "Планировка", value: "layout" },
                        { label: "На этаже", value: "floor" },
                    ]?.map((item) => (
                        <Pressable
                            key={item.value}
                            className={[type === item.value ? "bg-gray-100" : "", "justify-center items-center w-2/4 py-[12px] rounded-[5px]"].join(" ")}
                            onPress={() => handleType(item.value)}
                        >
                            <Text className={["font-semibold text-[14px]", type === item.value ? "text-gray-900" : "text-gray-400"].join(" ")}>{item.label}</Text>
                        </Pressable>
                    ))}
                </View>
                <View className="mt-[24px] gap-[6px]">
                    <Text className="text-[24px] font-semibold text-gray-900 leading-[1.1]">3-комнатная, 104,5 м2</Text>
                    <Text className="text-[16px] font-semibold text-gray-900 leading-[1.1]">от 85 500 000 ₸</Text>
                    <Text className="text-[14px] text-gray-500 leading-[1.1]">В рассрочку 560 617 ₸</Text>
                </View>
                <View className="mt-[24px] gap-[8px]">
                    {[
                        { label: "Жилой комплекс", value: "Aqtolqyn Grand" },
                        { label: "Блок", value: "12" },
                        { label: "Этаж", value: "10" },
                        { label: "Номер квартиры", value: "150" },
                        { label: "Высота потолков", value: "3.2" },
                        { label: "Отделка", value: "Черновая" },
                    ]?.map((item, i) => (
                        <View key={i} className="flex-row items-center  gap-[5px]">
                            <Text className="text-[14px] text-gray-900 leading-[1.1]">{item.label}</Text>
                            <View style={styles.borderContainer}>
                                <View style={styles.borderBottom}></View>
                            </View>
                            <Text className="text-[14px] text-gray-900 leading-[1.1]">{item.value}</Text>
                        </View>
                    ))}
                </View>
                <View className="mt-[24px] gap-[10px]">
                    {paymentOptions?.map((option) => (
                        <Pressable
                            key={option.value}
                            className={[option.value === paymentOption ? "border-primary-500" : "border-gray-200", "gap-[10px] border rounded-[10px] p-[16px]"].join(" ")}
                            onPress={() => handlePaymentOption(option.value)}
                        >
                            <View className="flex-row items-center justify-between">
                                <View className="gap-[4px]">
                                    <Text className="text-[16px] text-gray-900 leading-[1.1] font-semibold">{option.title}</Text>
                                    <Text className="text-[16px] text-gray-900 leading-[1.1] font-light">{option.subtitle}</Text>
                                </View>
                                <View
                                    className={[
                                        "w-[16px] h-[16px] rounded-full justify-center items-center",
                                        option.value === paymentOption ? "bg-primary-500" : "bg-gray-50",
                                    ].join(" ")}
                                >
                                    <View className="w-[6px] h-[6px] bg-white rounded-full" />
                                </View>
                            </View>
                            <Text className="text-[12px] text-gray-500 leading-[1.1] font-light">{option.description}</Text>
                        </Pressable>
                    ))}
                </View>
                <Button title="Купить" className="mt-[24px]" />
            </ScrollView>
        </SafeAreaView>
    );
};

export default BuyDetails;

const styles = StyleSheet.create({
    borderContainer: {
        height: 1,
        overflow: "hidden",
        flex: 1,
        marginTop: 8,
    },
    borderBottom: {
        height: 2,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: "dashed",
    },
});
