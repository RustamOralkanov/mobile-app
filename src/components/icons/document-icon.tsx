import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from "react-native-svg";

export default function DocumentIcon(props: SvgProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                opacity="0.5"
                d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                fill={props.fill ? props.fill : "url(#paint0_linear_5021_23369)"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10Z"
                fill={props.fill ? props.fill : "#B8B8B8"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H13C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z"
                fill={props.fill ? props.fill : "#B8B8B8"}
            />
            <Defs>
                <LinearGradient id="paint0_linear_5021_23369" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <Stop stopColor={props.fill ? props.fill : "#B8B8B8"} />
                    <Stop offset="1" stopColor={props.fill ? props.fill : "#B8B8B8"} stopOpacity="0.1" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
