import Svg, { Path, SvgProps } from "react-native-svg";

export default function FilterIcon(props: SvgProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path d="M13.2461 7.25391H18.8881" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.26 7.19401C9.26 5.75201 8.083 4.58301 6.63 4.58301C5.178 4.58301 4 5.75201 4 7.19401C4 8.63601 5.178 9.80501 6.63 9.80501C8.083 9.80501 9.26 8.63601 9.26 7.19401Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
            <Path d="M10.7553 16.8672H5.11328" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7402 16.8063C14.7402 15.3643 15.9172 14.1953 17.3702 14.1953C18.8222 14.1953 20.0002 15.3643 20.0002 16.8063C20.0002 18.2483 18.8222 19.4183 17.3702 19.4183C15.9172 19.4183 14.7402 18.2483 14.7402 16.8063Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
        </Svg>
    );
}
