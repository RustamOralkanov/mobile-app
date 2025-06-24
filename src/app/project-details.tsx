import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import Button from "@/components/ui/button";
import SafeScreen from "@/components/ui/safe-screen";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams, useRouter } from "expo-router";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function ProjectDetails() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const bottomSheetRef = useRef<BottomSheet>(null);
    const [complexView, setComplexView] = useState("Архитектура");
    const [rooms, setRooms] = useState<number>(1);

    const handleComplexView = useCallback((view: string) => {
        setComplexView(view);
    }, []);

    const snapPoints = useMemo(() => ["20%", "85%"], []);
    const handleRooms = useCallback((room: number) => {
        setRooms(room);
    }, []);

    console.log(id);

    return (
        <SafeScreen>
            <Pressable className="flex-row items-center gap-2.5 py-5 fixed top-0 left-0 right-0 z-10 bg-white -mx-5 px-5 " onPress={() => router.back()}>
                <ArrowLeftIcon />
                <Text className="text-gray-900 text-[16px] font-bold">Название проекта</Text>
            </Pressable>
            <View style={StyleSheet.absoluteFill} className="relative">
                <Image
                    source={{ uri: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488" }}
                    className="w-full h-full object-cover"
                />
                <BlurView intensity={60} tint="dark" style={styles.blurContainer}>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-white text-[32px] font-bold">Baitas</Text>
                        <Button type="primary" title="Выбрать квартиру" className="max-w-[176px]" />
                    </View>
                    <View className="flex-row justify-between items-start mt-3">
                        {[
                            {
                                title: "2",
                                subtitle: "блока",
                            },
                            {
                                title: "2",
                                subtitle: "блока",
                            },
                            {
                                title: "10-12",
                                subtitle: "этажность зданий",
                            },
                        ].map((item, index) => (
                            <View key={index}>
                                <Text className="text-white text-[24px] font-bold">{item.title}</Text>
                                <Text className="text-white text-[14px]">{item.subtitle}</Text>
                            </View>
                        ))}
                    </View>
                </BlurView>
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                handleIndicatorStyle={{ backgroundColor: "#d1d5db", width: 48 }}
                backgroundStyle={{ backgroundColor: "#ffffff", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            >
                <BottomSheetScrollView
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: Platform.OS === "android" ? 40 : 20, paddingVertical: 20, backgroundColor: "#ffffff" }}
                >
                    <Text className="text-gray-900 text-[32px] font-bold leading-[1.1]">Современное представление о жилом комплексе бизнес-класса</Text>
                    <Text className="text-gray-500 text-[14px] leading-[1.1] mt-3">
                        2 блока, переменная этажность, система Smart-управление, патио-зоны и личные террасы сделают ваше пребывание в квартире ещё более комфортным.
                    </Text>
                    <View className="gap-[24px] mt-6">
                        <View className="flex-row">
                            {["Архитектура", "Лобби", "Паркинг"].map((item, index) => (
                                <Pressable key={index} className="flex-row items-center gap-2" onPress={() => handleComplexView(item)}>
                                    <Text
                                        className={[complexView === item ? "text-gray-900 bg-gray-100" : "text-gray-400 ", "text-[14px] font-semibold p-3 rounded-[5px]"].join(" ")}
                                    >
                                        {item}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>
                        <View className="-mr-5">
                            <Carousel
                                loop={true}
                                width={310}
                                height={380}
                                snapEnabled={true}
                                pagingEnabled={true}
                                autoPlayInterval={2000}
                                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                style={{ width: "100%" }}
                                renderItem={({ item }) => (
                                    <View className="w-[300px] h-[380px] bg-gray-100 rounded-xl overflow-hidden relative">
                                        <View className="w-[300px] h-[380px] rounded-xl">
                                            <Image
                                                source={{
                                                    uri: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
                                                }}
                                                className="w-full h-full object-cover"
                                            />
                                        </View>
                                        <LinearGradient colors={["transparent", "rgba(0,0,0,0.5)"]} style={styles.background} />
                                        <View className="flex-row gap-3 justify-between items-end absolute bottom-0 left-0 right-0 px-6 pb-6 z-20">
                                            <Text className="text-white font-semibold text-[24px] max-w-[180px]">{"Smart управление"}</Text>
                                            <View className="w-[44px] h-[44px] bg-white rounded-full justify-center items-center">
                                                <Text className="text-gray-900 text-[24px] leading-[1.1]">{"+"}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                        <View className="gap-3">
                            <Carousel
                                loop={true}
                                width={Dimensions.get("window").width - 40}
                                height={300}
                                snapEnabled={true}
                                pagingEnabled={true}
                                autoPlayInterval={2000}
                                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                style={{ width: "100%" }}
                                renderItem={({ item }) => (
                                    <View className="w-full h-[300px] bg-gray-100 rounded-xl overflow-hidden relative">
                                        <Image
                                            source={{
                                                uri: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
                                            }}
                                            className="w-full h-full object-cover"
                                        />
                                    </View>
                                )}
                            />
                            <View className="flex-row items-center justify-center gap-3">
                                <Text className="text-[14px] text-gray-600 font-bold">1/15</Text>
                                <Text className="text-[14px] text-gray-600">Worem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                        <View className="p-4 gap-[24px] bg-gray-100 rounded-[10px]">
                            <Text className="text-gray-900 text-[32px] font-bold leading-[1.1]">Квартиры на изысканный вкус</Text>
                            <View className="flex-row flex-wrap gap-1">
                                {[1, 2, 3, 4].map((item) => (
                                    <Pressable
                                        key={item}
                                        className={["flex-row items-center gap-2 p-3 rounded-[5px] ", rooms === item ? "bg-white" : ""].join(" ")}
                                        onPress={() => handleRooms(item)}
                                    >
                                        <Text className={["text-[14px]  font-bold", rooms === item ? "text-gray-900" : "text-gray-400"].join(" ")}>{item}-комнатные</Text>
                                    </Pressable>
                                ))}
                            </View>
                            <View className="bg-white rounded-lg w-full h-[200px]">
                                <Image
                                    source={{
                                        uri: "https://api.ab-capital.kz/storage/plans/68376c3cefe00.png",
                                    }}
                                    className="w-full h-full"
                                    style={{
                                        resizeMode: "contain",
                                    }}
                                />
                            </View>
                            <Button type="primary" title="Выбрать квартиру" className="w-full" />
                        </View>
                        <Text className="text-gray-900 text-[32px] font-bold leading-[1.1]">Ход строительства</Text>
                        <View className="relative h-[250px] w-full rounded-lg overflow-hidden">
                            <View className="bg-gray-900/50 w-full h-full absolute top-0 left-0 z-10"></View>
                            <View className="gap-[24px] absolute bottom-0 left-0 right-0 z-20 p-4">
                                <Text className="text-white text-[24px] font-bold leading-[1.1]">Сентябрь 2024</Text>
                                <Button type="secondary" title="Смотреть видео обзор" className="w-full" />
                            </View>
                            <Image
                                source={{
                                    uri: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
                                }}
                                className="w-full h-full object-cover"
                            />
                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    blurContainer: {
        flex: 1,
        padding: 20,
        margin: 16,
        textAlign: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: 20,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 150,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 380,
    },
});
