import PageHead from "@/components/ui/page-head";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewsPage() {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
            <PageHead title="Новости" />
            <ScrollView contentContainerClassName="pb-[100px] gap-[24px]" showsVerticalScrollIndicator={false}>
                {[...Array(12)]?.map((_, i) => (
                    <View key={i} className="gap-[12px]">
                        <View className="flex-row justify-between items-end gap-[10px]">
                            <View className="gap-[4px] max-w-[300px]">
                                <Text className="text-[12px] text-gray-500">26.06.2025</Text>
                                <Text className="text-[16px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</Text>
                            </View>
                            <Link href="/news/[news-details]" asChild>
                                <Text className="text-[12px] text-info-500">Читать</Text>
                            </Link>
                        </View>
                        <Image
                            source={{ uri: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488" }}
                            className="w-full h-[200px] rounded-[10px]"
                        />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
