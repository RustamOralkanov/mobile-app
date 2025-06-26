import Svg, { Path, SvgProps } from "react-native-svg";

export default function HeartIcon(props: SvgProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4411 3.37104C15.3451 2.69404 13.4341 3.25804 12.0001 4.95404C10.5651 3.25604 8.65409 2.69504 6.56009 3.37104C3.91309 4.22304 2.26209 6.61404 2.25009 9.61004C2.22609 14.744 7.16709 18.766 11.7981 20.818L12.0011 20.908L12.2041 20.818C16.8361 18.766 21.7751 14.744 21.7501 9.61004C21.7381 6.61404 20.0871 4.22304 17.4411 3.37104Z"
                fill="#F5F5F5"
            />
        </Svg>
    );
}
