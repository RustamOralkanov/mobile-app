import { Pressable, Text, View } from "react-native";

const FilterButtonGroup = ({
    options,
    value,
    onChange,
    multi = false,
    renderLabel,
}: {
    options: (string | number)[];
    value: string | number | (string | number)[];
    onChange: (val: any) => void;
    multi?: boolean;
    renderLabel?: (val: string | number) => string;
}) => (
    <View className="flex-row flex-wrap gap-2">
        {options.map((option) => {
            const selected = multi ? Array.isArray(value) && value.includes(option) : value === option;
            return (
                <Pressable
                    key={option}
                    className={`px-4 h-[37px] items-center justify-center rounded-full border ${selected ? "bg-gray-900 border-gray-900" : "bg-white border-white"}`}
                    onPress={() => {
                        if (multi) {
                            if (Array.isArray(value)) {
                                if (selected) {
                                    onChange(value.filter((v) => v !== option));
                                } else {
                                    onChange([...value, option]);
                                }
                            }
                        } else {
                            onChange(option);
                        }
                    }}
                >
                    <Text className={`text-sm font-medium ${selected ? "text-white" : "text-gray-700"}`}>{renderLabel ? renderLabel(option) : option}</Text>
                </Pressable>
            );
        })}
    </View>
);
export default FilterButtonGroup;
