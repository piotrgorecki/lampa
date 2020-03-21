import React, { useCallback, useState } from "react";
import { Dimensions, Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from "react-native";

import getNextImage from "./getNextImage";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

const WindowDim = Dimensions.get("window");

const Home = () => {
    const [image, setImage] = useState<ImageSourcePropType>(getNextImage);

    const handlePressImage = useCallback(() => {
        setImage(getNextImage());
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePressImage}>
                <Image
                    resizeMode="contain"
                    style={{ width: WindowDim.width, height: WindowDim.height }}
                    source={image}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Home;
