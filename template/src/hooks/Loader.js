import React from "react";
import { View } from "react-native";
import { Bars } from "react-native-loader";
import Styles from "./Styles";
import Colors from "../util/Colors";

const Loader = () => {
    return (
        <View style={Styles.container}>
            <View>
                <Bars size={20} color={Colors.BlueSecondary} />
            </View>
        </View>

    )
}

export default Loader;
