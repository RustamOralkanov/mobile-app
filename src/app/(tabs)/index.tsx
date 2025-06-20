import CaretRightIcon from "@/components/icons/caret-right-icon";
import SafeScreen from "@/components/ui/safe-screen";

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const data = [
    {
        id: 1,
        title: "Forem ipsum dolor sit amet",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
    },
    {
        id: 2,
        title: "Forem ipsum dolor sit amet",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
    },
    {
        id: 3,
        title: "Forem ipsum dolor sit amet",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
    },
    {
        id: 4,
        title: "Forem ipsum dolor sit amet",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
    },
];

export default function Home() {
    return (
        <SafeScreen>
            <View className="py-3 flex-row items-center justify-between">
                <View className="flex-row items-center gap-2.5">
                    <Text className="text-2xl font-semibold">Cameron</Text>
                    <View className="items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <CaretRightIcon />
                    </View>
                </View>
                <View className="flex-row items-center gap-[6px] px-3 py-2 bg-primary-500 rounded-full shadow shadow-slate-600/20">
                    <Image source={require("../../assets/images/ab.png")} className="w-2.5 h-2.5" />
                    <Text className="text-sm font-semibold">
                        {(100000).toLocaleString()} <Text className="text-gray-500">₸</Text>
                    </Text>
                </View>
            </View>
            <View className="mt-3 -mr-5">
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={false}
                    horizontal
                    data={data}
                    renderItem={({ item, index }) => (
                        <View className="!w-[120px] !h-[120px] mr-3 border-2 border-primary-500 rounded-xl relative" key={index}>
                            <Text className="text-xs text-white absolute bottom-0 left-0 right-0 p-2 z-20">{item.title}</Text>
                            <View className="absolute inset-0 bg-black/50 rounded-xl" />
                            <Image source={{ uri: item.image }} className="w-full h-full rounded-xl" />
                        </View>
                    )}
                />
            </View>
            <View className="flex-row items-center gap-2.5 rounded-xl h-[70px] mt-6 relative overflow-hidden">
                <View className="flex-1 flex-row gap-1 items-center relative z-10 pl-4">
                    <Text className="text-gray-900 text-sm">Показать</Text>
                    <View className="flex-row items-center px-2 py-1 bg-white/50 rounded-md">
                        <Text className="text-sm font-semibold">0 000</Text>
                    </View>
                    <Text className="text-gray-900 text-sm">предложении</Text>
                </View>
                <View className="absolute right-0 top-0 bottom-0 w-full">
                    <Image source={require("../../assets/images/flats.png")} className="w-full h-full" />
                </View>
            </View>
            <View className="gap-3 mt-6">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[16px] font-bold">Проекты</Text>
                    <Text className="text-info-500 text-[16px] font-semibold">Все</Text>
                </View>
                <View className="-mr-5">
                    <Carousel
                        loop={true}
                        width={262}
                        height={150}
                        snapEnabled={true}
                        pagingEnabled={true}
                        autoPlayInterval={2000}
                        data={data}
                        style={{ width: "100%" }}
                        renderItem={({ item }) => (
                            <View className="w-[250px] h-[150px] bg-gray-100 rounded-xl overflow-hidden relative">
                                <View className="w-[250px] h-[150px] rounded-xl">
                                    <Image source={{ uri: item?.image }} className="w-full h-full object-cover" />
                                </View>
                                <LinearGradient colors={["transparent", "rgba(0,0,0,0.5)"]} style={styles.background} />
                                <Text className="absolute bottom-0 left-0 right-0 px-4 pb-3 z-20 text-white font-semibold text-sm">{item?.title}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            <View className="gap-3 mt-6">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[16px] font-bold">Новости</Text>
                    <Text className="text-info-500 text-[16px] font-semibold">Все</Text>
                </View>
                <View className="-mr-5">
                    <Carousel
                        loop={true}
                        width={262}
                        height={150}
                        snapEnabled={true}
                        pagingEnabled={true}
                        autoPlayInterval={2000}
                        data={data}
                        style={{ width: "100%" }}
                        renderItem={({ item }) => (
                            <View className="w-[250px] h-[150px] bg-gray-100 rounded-xl overflow-hidden relative">
                                <View className="w-[250px] h-[150px] rounded-xl">
                                    <Image source={{ uri: item?.image }} className="w-full h-full object-cover" />
                                </View>
                                <LinearGradient colors={["transparent", "rgba(0,0,0,0.5)"]} style={styles.background} />
                                <Text className="absolute bottom-0 left-0 right-0 px-4 pb-3 z-20 text-white font-semibold text-sm">{item?.title}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            <View className="gap-3 mt-6">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[16px] font-bold">Акции</Text>
                    <Text className="text-info-500 text-[16px] font-semibold">Все</Text>
                </View>
                <View className="-mr-5">
                    <Carousel
                        loop={true}
                        width={262}
                        height={150}
                        snapEnabled={true}
                        pagingEnabled={true}
                        autoPlayInterval={2000}
                        data={data}
                        style={{ width: "100%" }}
                        renderItem={({ item }) => (
                            <View className="w-[250px] h-[150px] bg-gray-100 rounded-xl overflow-hidden relative">
                                <View className="w-[250px] h-[150px] rounded-xl">
                                    <Image source={{ uri: item?.image }} className="w-full h-full object-cover" />
                                </View>
                                <LinearGradient colors={["transparent", "rgba(0,0,0,0.5)"]} style={styles.background} />
                                <Text className="absolute bottom-0 left-0 right-0 px-4 pb-3 z-20 text-white font-semibold text-sm">{item?.title}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 150,
    },
});
