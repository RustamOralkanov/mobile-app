import BuildingsIcon from "@/components/icons/buildings-icon";
import ChatIcon from "@/components/icons/chat-icon";
import DocumentIcon from "@/components/icons/document-icon";
import HomeAngleIcon from "@/components/icons/home-angle-icon";
import SofaIcon from "@/components/icons/sofa-icon";
import { Tabs } from "expo-router";
import { Platform, Text } from "react-native";

const screens = [
    { name: "index", label: "Главная", icon: HomeAngleIcon },
    { name: "buy", label: "Купить", icon: SofaIcon },
    { name: "services", label: "Сервисы", icon: BuildingsIcon },
    { name: "messages", label: "Сообщения", icon: ChatIcon },
    { name: "menu", label: "Меню", icon: DocumentIcon },
];

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute",
                        shadowColor: "#1d1d1d",
                        shadowOffset: { width: 0, height: -10 },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        elevation: 1,
                        height: 80,
                    },
                    default: {},
                }),
            }}
        >
            {screens.map((screen, i) => (
                <Tabs.Screen
                    key={i}
                    name={screen.name}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    color: focused ? "#1D1D1D" : "#8F8F8F",
                                    fontSize: 12,
                                }}
                            >
                                {screen.label}
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => <screen.icon fill={focused ? "#D6ED17" : undefined} />,
                    }}
                />
            ))}
        </Tabs>
    );
}
