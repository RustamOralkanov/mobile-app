import React from "react";
import { Pressable, Text, type ButtonProps } from "react-native";

const Button = (props: ButtonProps & { type?: "primary" | "secondary" } & { loading?: boolean } & { className?: string }) => {
    const { onPress, title, type = "primary", disabled } = props;
    return (
        <Pressable
            onPress={onPress}
            className={[
                "bg-primary-500 p-2 rounded-md h-[55px] flex items-center justify-center text-sm w-full",
                props.className,
                type === "secondary" && "!bg-gray-100",
                disabled && "opacity-50",
            ].join(" ")}
        >
            <Text>{title}</Text>
        </Pressable>
    );
};

export default Button;
