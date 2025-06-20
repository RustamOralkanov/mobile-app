import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from "react-native-svg";

export default function ChatIcon(props: SvgProps) {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
            <Path
                opacity="0.5"
                d="M12.25 22C17.7728 22 22.25 17.5228 22.25 12C22.25 6.47715 17.7728 2 12.25 2C6.72715 2 2.25 6.47715 2.25 12C2.25 13.5997 2.62562 15.1116 3.29346 16.4525C3.47094 16.8088 3.53001 17.2161 3.42712 17.6006L2.83151 19.8267C2.57295 20.793 3.45701 21.677 4.42335 21.4185L6.64939 20.8229C7.03393 20.72 7.44121 20.7791 7.79753 20.9565C9.13836 21.6244 10.6503 22 12.25 22Z"
                fill={props.fill ? props.fill : "url(#paint0_linear_5021_23361)"}
            />
            <Path
                d="M8.075 12.85C7.61937 12.85 7.25 13.2194 7.25 13.675C7.25 14.1306 7.61937 14.5 8.075 14.5H14.125C14.5806 14.5 14.95 14.1306 14.95 13.675C14.95 13.2194 14.5806 12.85 14.125 12.85H8.075Z"
                fill={props.fill ? props.fill : "#B8B8B8"}
            />
            <Path
                d="M8.075 9C7.61937 9 7.25 9.36937 7.25 9.825C7.25 10.2806 7.61937 10.65 8.075 10.65H16.875C17.3306 10.65 17.7 10.2806 17.7 9.825C17.7 9.36937 17.3306 9 16.875 9H8.075Z"
                fill={props.fill ? props.fill : "#B8B8B8"}
            />
            <Defs>
                <LinearGradient id="paint0_linear_5021_23361" x1="8.75" y1="2" x2="22.25" y2="28" gradientUnits="userSpaceOnUse">
                    <Stop stopColor={props.fill ? props.fill : "#B8B8B8"} />
                    <Stop offset="1" stopColor={props.fill ? props.fill : "#B8B8B8"} stopOpacity="0.1" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
