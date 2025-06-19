import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

type FormInputProps = {
    name: string;
    control: any;
    placeholder?: string;
    secureTextEntry?: boolean;
    rules?: object;
};

const InputPhone: React.FC<FormInputProps> = ({ name, control, placeholder, secureTextEntry, rules }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View>
                    <MaskedTextInput
                        mask="+7 (999) 999-99-99"
                        style={[styles.input, isFocused && styles.inputFocused, error && styles.inputError]}
                        onBlur={() => {
                            setIsFocused(false);
                            onBlur();
                        }}
                        onFocus={() => setIsFocused(true)}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor="#1D1D1D"
                        secureTextEntry={secureTextEntry}
                        keyboardType="numeric"
                    />
                    {error && <Text className="text-xs mt-1 ml-1 text-red-500">{error.message}</Text>}
                </View>
            )}
        />
    );
};

export default InputPhone;

const styles = StyleSheet.create({
    input: {
        height: 55,
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#B8B8B8",
        paddingHorizontal: 12,
        fontSize: 14,
        color: "#1D1D1D",
    },
    inputFocused: {
        borderColor: "#D6ED17", // синий при фокусе
    },
    inputError: {
        borderColor: "#FF4D4F", // красный при ошибке
    },
    errorText: {
        fontSize: 12,
        color: "#FF4D4F",
        marginTop: 4,
        marginLeft: 4,
    },
});
