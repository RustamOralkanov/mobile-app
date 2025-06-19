import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

type FormInputProps = {
    name: string;
    control: any;
    placeholder?: string;
    secureTextEntry?: boolean;
    rules?: object;
};

const Input: React.FC<FormInputProps> = ({ name, control, placeholder, secureTextEntry, rules }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View>
                    <TextInput
                        className={[
                            isFocused && "!border-primary-500",
                            "h-[55px] w-full bg-gray-100 rounded border border-gray-300 px-4 py-3 !text-sm placeholder:text-gray-900",
                        ].join(" ")}
                        onBlur={() => {
                            setIsFocused(false);
                            onBlur();
                        }}
                        onFocus={() => setIsFocused(true)}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                    />
                    {error && <Text className="text-xs mt-1 ml-1 text-red-500">{error.message}</Text>}
                </View>
            )}
        />
    );
};

export default Input;
