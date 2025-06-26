import { Image, Pressable, Text, View } from "react-native";
import HeartIcon from "../icons/heart-icon";

interface PropertyCardProps {
    onPress?: () => void;
    id?: string | number;
}

const PropertyCard = ({ onPress, id }: PropertyCardProps) => {
    return (
        <Pressable className="bg-white rounded-[10px] overflow-hidden p-[16px]" onPress={onPress}>
            <View className="flex-row items-center gap-[5px]">
                {["115", "Aqtolqyn Grand"].map((item, i) => (
                    <View key={i} className="bg-gray-100 rounded-[5px] p-[5px]">
                        <Text className="text-gray-900 text-[12px]">{item}</Text>
                    </View>
                ))}
            </View>
            <View className="mt-[12px]">
                <Text className="text-gray-900 text-[16px] font-semibold leading-[1.1]">3-комнатная, 104,5 м2</Text>
                <View className="flex-row items-center gap-[10px] mt-[4px]">
                    <Text className="text-gray-500 text-[16px] font-semibold leading-[1.1]">10 000 000 ₸</Text>
                    <Text className="text-gray-500 text-[12px] leading-[1.1]">В рассрочку 000 000 ₸</Text>
                </View>
            </View>
            <View className="mt-[12px] -mx-[16px] pb-[12px] border-b border-gray-200">
                <Image
                    source={{ uri: "https://api.ab-capital.kz/storage/plans/68376c3cefe00.png" }}
                    className="w-full h-[180px] rounded-[5px] px-[16px]"
                    style={{
                        resizeMode: "contain",
                    }}
                />
            </View>
            <View className="mt-[12px] flex-row items-center justify-between">
                <View className="flex-row items-center gap-[5px]">
                    <Text className="px-[6px] py-[4px] bg-error-500 rounded-full text-gray-100 text-[12px] leading-[1.1]">Акция</Text>
                    <Text className="px-[6px] py-[4px] bg-warning-500 rounded-full text-gray-100 text-[12px] leading-[1.1]">С отделкой</Text>
                    <Text className="px-[6px] py-[4px] bg-gray-100 rounded-full text-gray-600 text-[12px] leading-[1.1]">Qorem ipsum dolor </Text>
                </View>
                <HeartIcon />
            </View>
        </Pressable>
    );
};

export default PropertyCard;
