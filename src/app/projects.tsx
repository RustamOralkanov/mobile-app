import FilterIcon from "@/components/icons/filter-icon";
import Button from "@/components/ui/button";
import ComplexCard from "@/components/ui/complex-card";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const projectsData = [
    {
        id: 1,
        title: "Жилой комплекс 'Солнечный'",
        location: "Алматы, ул. Абая 150",
        lat: 43.235,
        lng: 76.89,
        price: "от 15 000 000 ₸",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
        status: "Строится",
        completion: "2024 Q4",
    },
    {
        id: 2,
        title: "Бизнес-центр 'Плаза'",
        location: "Астана, пр. Республики 25",
        lat: 43.24,
        lng: 76.9,
        price: "от 25 000 000 ₸",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
        status: "Завершен",
        completion: "2023 Q3",
    },
    {
        id: 3,
        title: "Жилой комплекс 'Парк Сити'",
        location: "Алматы, ул. Достык 45",
        lat: 43.245,
        lng: 76.92,
        price: "от 18 000 000 ₸",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
        status: "Планируется",
        completion: "2025 Q2",
    },
    {
        id: 4,
        title: "Торговый центр 'Мега'",
        location: "Астана, ул. Кенесары 78",
        lat: 43.22,
        lng: 76.88,
        price: "от 30 000 000 ₸",
        image: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488",
        status: "Строится",
        completion: "2024 Q3",
    },
];

export default function Projects() {
    const insets = useSafeAreaInsets();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const filterBottomSheetRef = useRef<BottomSheet>(null);

    const [filters, setFilters] = useState({
        class: "all",
        completion: "all",
    });

    const snapPoints = useMemo(() => ["20%", "85%"], []);
    const filterSnapPoints = useMemo(() => ["45%"], []);

    const handleFilterPress = () => {
        filterBottomSheetRef.current?.expand();
    };

    const handleFilterChange = (filterType: string, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: value,
        }));
    };

    const handleFilterSheetChange = (index: number) => {
        console.log("BottomSheet индекс изменился на:", index);
        // Если индекс -1, значит BottomSheet закрыт
        if (index === -1) {
            console.log("BottomSheet фильтров закрыт");
        } else if (index === 0) {
            console.log("BottomSheet фильтров открыт");
        }
    };

    const applyFilters = () => {
        // Здесь можно добавить логику применения фильтров
        console.log("Применены фильтры:", filters);
        filterBottomSheetRef.current?.close();
    };

    return (
        <View className="flex-1">
            <View
                className="absolute top-0 left-0 right-0 z-10 flex-row items-center justify-between bg-white/80 px-5 pb-3 backdrop-blur-sm"
                style={{ paddingTop: Platform.OS === "android" ? insets.top + 20 : 60 }}
            >
                <Text className="text-2xl font-bold text-gray-900">Все проекты</Text>
                <Pressable className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center" onPress={handleFilterPress}>
                    <FilterIcon />
                </Pressable>
            </View>
            <MapView
                style={StyleSheet.absoluteFill}
                userInterfaceStyle="light"
                initialRegion={{
                    latitude: 43.238949,
                    longitude: 76.889709,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {projectsData.map((project) => (
                    <Marker key={project.id} coordinate={{ latitude: project.lat, longitude: project.lng }}>
                        <View className="w-[50px] h-[50px] border-2 border-white rounded-full overflow-hidden">
                            <Image source={{ uri: project.image }} className="w-full h-full object-cover rounded-full" />
                        </View>
                    </Marker>
                ))}
            </MapView>

            {/* Основной BottomSheet с проектами */}
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
                    {projectsData.map((project) => (
                        <View key={project.id} className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative mb-3">
                            <ComplexCard />
                        </View>
                    ))}
                </BottomSheetScrollView>
            </BottomSheet>

            {/* BottomSheet для фильтров */}
            <BottomSheet
                ref={filterBottomSheetRef}
                index={-1}
                snapPoints={filterSnapPoints}
                handleIndicatorStyle={{ backgroundColor: "#d1d5db", width: 48 }}
                backgroundStyle={{ backgroundColor: "#F5F5F5", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                onChange={handleFilterSheetChange}
                enablePanDownToClose={true}
                enableOverDrag={false}
            >
                <View className="flex-1">
                    <View className="pb-4 border-b border-gray-200 px-5">
                        <Text className="text-xl font-bold text-gray-900">Фильтры</Text>
                        <Text className="text-sm text-gray-500">Выберите недвижимость</Text>
                    </View>
                    <View className="p-5 !pb-[60px] gap-[24px]">
                        <View>
                            <Text className="text-base font-semibold text-gray-900 mb-3">Класс</Text>
                            <View className="flex-row flex-wrap gap-2">
                                {["all", "Комфорт", "Бизнес", "Премиум"].map((status) => (
                                    <Pressable
                                        key={status}
                                        className={`px-4 h-[37px] items-center justify-center rounded-full border ${filters.class === status ? "bg-gray-900 border-gray-900" : "bg-white border-white"}`}
                                        onPress={() => handleFilterChange("class", status)}
                                    >
                                        <Text className={`text-sm font-medium ${filters.class === status ? "text-white" : "text-gray-700"}`}>
                                            {status === "all" ? "Все" : status}
                                        </Text>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                        <View>
                            <Text className="text-base font-semibold text-gray-900 mb-3">Срок сдачи</Text>
                            <View className="flex-row flex-wrap gap-2">
                                {["all", "2025", "2026", "2027"].map((status) => (
                                    <Pressable
                                        key={status}
                                        className={`px-4 h-[37px] items-center justify-center rounded-full border ${filters.completion === status ? "bg-gray-900 border-gray-900" : "bg-white border-white"}`}
                                        onPress={() => handleFilterChange("completion", status)}
                                    >
                                        <Text className={`text-sm font-medium ${filters.completion === status ? "text-white" : "text-gray-700"}`}>
                                            {status === "all" ? "Все" : status}
                                        </Text>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                        <View className="flex-row gap-3">
                            <Button type="primary" onPress={applyFilters} title="Применить" />
                        </View>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
}
