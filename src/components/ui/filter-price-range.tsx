import Slider from "@react-native-community/slider";
import { StyleSheet, View } from "react-native";

const FilterPriceRange = () => {
    return (
        <View>
            <Slider style={{ width: "100%", height: 40 }} minimumValue={0} maximumValue={100} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="red" />
        </View>
    );
};

export default FilterPriceRange;

const styles = StyleSheet.create({});
