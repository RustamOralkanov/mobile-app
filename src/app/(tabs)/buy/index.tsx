import CheckIcon from "@/components/icons/check-icon";
import FilterIcon from "@/components/icons/filter-icon";
import SortIcon from "@/components/icons/sort-icon";
import Button from "@/components/ui/button";
import FilterButtonGroup from "@/components/ui/filter-button-group";
import FilterPriceRange from "@/components/ui/filter-price-range";
import PropertyCard from "@/components/ui/property-card";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Константы опций
const PROPERTY_TYPES = ["Квартиры", "Машино-места", "Кладовые", "Коммерческие помещения"];
const SORT_TYPES = ["По возрастанию цены", "По убыванию цены", "По возрастанию площади", "По убыванию площади"];
const FILTER_TYPES = ["all", "Квартира", "Машино-места", "Кладовые", "Коммерческие помещения"];
const CATEGORIES = ["all", "Комфорт", "Бизнес", "Премиум"];
const ROOMS = [1, 2, 3, 4, 5];
const COMPLETION = ["all", "2025", "2026", "2027", "2028"];

// Типы фильтров
interface Filters {
    type: string;
    category: string;
    complex: string;
    rooms: number[];
    price: [number, number];
    completion: string;
}

export default function BuyPage() {
    const [propertyType, setPropertyType] = useState<string>(PROPERTY_TYPES[0]);
    const [sortType, setSortType] = useState<string>(SORT_TYPES[0]);
    const [filters, setFilters] = useState<Filters>({
        type: "all",
        category: "all",
        complex: "all",
        rooms: [1, 2],
        price: [10000, 10000000],
        completion: "all",
    });

    const sortBottomSheet = useRef<BottomSheet>(null);
    const filterBottomSheet = useRef<BottomSheet>(null);

    const sortSnapPoints = useMemo(() => [520], []);
    const filterSnapPoints = useMemo(() => [720], []);

    const handleSortPress = useCallback(() => {
        sortBottomSheet.current?.expand();
    }, []);

    const handleFilterPress = useCallback(() => {
        filterBottomSheet.current?.expand();
    }, []);

    const handleFilterChange = useCallback((filterType: keyof Filters, value: any) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: value,
        }));
    }, []);

    const handleSortType = useCallback((item: string) => setSortType(item), []);
    const handlePropertyType = useCallback((item: string) => setPropertyType(item), []);

    const router = useRouter();

    // FlatList data
    const propertyCards = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({ id: i + 1 })), []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <View className="flex-row items-center justify-between px-[20px] py-[14px] backdrop-blur-sm">
                <Text className="text-2xl font-bold text-gray-900">Недвижимость</Text>
                <View className="flex-row items-center gap-[10px]">
                    <Pressable className="bg-white justify-center items-center w-[32px] h-[32px] rounded-full" onPress={handleFilterPress}>
                        <FilterIcon />
                    </Pressable>
                    <Pressable className="bg-white justify-center items-center w-[32px] h-[32px] rounded-full" onPress={handleSortPress}>
                        <SortIcon />
                    </Pressable>
                </View>
            </View>
            <View style={{ flexGrow: 1, paddingBottom: 100, paddingHorizontal: 20, paddingTop: 12 }}>
                <FlatList
                    data={PROPERTY_TYPES}
                    horizontal
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Pressable className="flex-row items-center gap-2" onPress={() => handlePropertyType(item)}>
                            <Text className={[propertyType === item ? "text-gray-900 bg-white" : "text-gray-400 ", "text-[14px] font-semibold p-3 rounded-[5px]"].join(" ")}>
                                {item}
                            </Text>
                        </Pressable>
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 0, paddingBottom: 12 }}
                />
                <FlatList
                    data={propertyCards}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <PropertyCard id={item.id} onPress={() => router.push({ pathname: "/(tabs)/buy/[buy-details]", params: { "buy-details": item.id.toString() } })} />
                    )}
                    contentContainerStyle={{ gap: 12, marginTop: 24, paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {/* Сортировка */}
            <BottomSheet
                ref={sortBottomSheet}
                index={-1}
                snapPoints={sortSnapPoints}
                handleIndicatorStyle={{ backgroundColor: "#d1d5db", width: 48 }}
                backgroundStyle={{ backgroundColor: "#F5F5F5", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                enablePanDownToClose={true}
                enableOverDrag={false}
            >
                <View className="px-[20px] py-[16px] border-b border-gray-200">
                    <Text className="text-[24px] font-semibold text-gray-900">Сортировка</Text>
                </View>
                <View className="p-[20px] gap-[12px]">
                    {SORT_TYPES.map((item) => (
                        <Pressable key={item} className="flex-row items-center justify-between p-[12px] bg-white rounded-[10px] h-[48px]" onPress={() => handleSortType(item)}>
                            <Text className="text-[16px] text-gray-900">{item}</Text>
                            {sortType === item ? <CheckIcon /> : null}
                        </Pressable>
                    ))}
                    <Button title={"Применить"} className="mt-[12px]" />
                </View>
            </BottomSheet>
            {/* Фильтры */}
            <BottomSheet
                ref={filterBottomSheet}
                index={-1}
                snapPoints={filterSnapPoints}
                handleIndicatorStyle={{ backgroundColor: "#d1d5db", width: 48 }}
                backgroundStyle={{ backgroundColor: "#F5F5F5", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                enablePanDownToClose={true}
                enableOverDrag={false}
            >
                <View className="px-[20px] py-[16px] border-b border-gray-200">
                    <Text className="text-[24px] font-semibold text-gray-900">Фильтр</Text>
                    <Text className="mt-[4px] text-[14px] text-gray-500">Выберите недвижимость</Text>
                </View>
                <View className="p-[20px] gap-[24px]">
                    <View>
                        <Text className="text-base font-semibold text-gray-900 mb-3">Тип недвижимости</Text>
                        <FilterButtonGroup
                            options={FILTER_TYPES}
                            value={filters.type}
                            onChange={(val) => handleFilterChange("type", val)}
                            renderLabel={(val) => (val === "all" ? "Все" : String(val))}
                        />
                    </View>
                    <View>
                        <Text className="text-base font-semibold text-gray-900 mb-3">Класс жилья</Text>
                        <FilterButtonGroup
                            options={CATEGORIES}
                            value={filters.category}
                            onChange={(val) => handleFilterChange("category", val)}
                            renderLabel={(val) => (val === "all" ? "Все" : String(val))}
                        />
                    </View>
                    <View>
                        <Text className="text-base font-semibold text-gray-900 mb-3">Комнатность</Text>
                        <FilterButtonGroup options={ROOMS} value={filters.rooms} onChange={(val) => handleFilterChange("rooms", val)} multi renderLabel={(val) => `${val}`} />
                    </View>
                    <FilterPriceRange />
                    <View>
                        <Text className="text-base font-semibold text-gray-900 mb-3">Срок сдачи</Text>
                        <FilterButtonGroup
                            options={COMPLETION}
                            value={filters.completion}
                            onChange={(val) => handleFilterChange("completion", val)}
                            renderLabel={(val) => (val === "all" ? "Все" : String(val))}
                        />
                    </View>
                    <Button title={"Применить"} className="mt-[12px]" />
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
}
