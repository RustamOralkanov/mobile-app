import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

const ComplexCard = () => {
    return (
        <Pressable
            className="overflow-hidden rounded-xl bg-white w-full"
            onPress={() => {
                router.push({
                    pathname: "/project-details",
                    params: {
                        id: 1,
                    },
                });
            }}
        >
            <Image
                source={{ uri: "https://images.adsttc.com/media/images/5efe/65d7/b357/6540/5400/0258/large_jpg/zr_spb_190901_Simon_Menges_17_HiRes.jpg?1593730488" }}
                className="h-full w-full object-cover"
            />
            <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.background} />
            <Text className="absolute bottom-3 left-4 text-[14px] font-bold text-white z-20">{"Project.title"}</Text>
        </Pressable>
    );
};

export default ComplexCard;

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 120,
    },
});
