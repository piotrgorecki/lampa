import React, { useCallback, useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

const WindowDim = Dimensions.get("window");
const LampsURLs = [
    "https://www.ikea.com/pl/pl/images/products/holmoe-floor-lamp__0529949_PE646443_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/holmoe-floor-lamp__0880288_PE611364_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp__0663863_PE712536_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp__0879908_PE714870_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lauters-floor-lamp__0879910_PE714871_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/not-floor-uplighter-reading-lamp__0606879_PE682600_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/not-floor-uplighter-reading-lamp__0880213_PE611339_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-led-floor-read-lamp-black__0751183_PE746947_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/naevlinge-led-floor-read-lamp-black__0751182_PE746948_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0606034_PE681992_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0879517_PE611365_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0387922_PE218567_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/lersta-floor-reading-lamp__0387925_PE224141_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/hektar-floor-lamp-dark-grey__0606222_PE682137_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/hektar-floor-lamp-dark-grey__0879554_PE611360_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/hektar-floor-lamp-dark-grey__0178781_PE317816_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-floor-lamp__0684004_PE720967_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-floor-lamp__0880121_PE611359_S5.JPG",
    "https://www.ikea.com/pl/pl/images/products/arstid-floor-lamp__0387918_PE365493_S5.JPG",
];

const Home = () => {
    const [idx, setIdx] = useState<number>(0);

    const handlePressImage = useCallback(() => {
        setIdx(Math.floor(Math.random() * LampsURLs.length));
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePressImage}>
                <Image
                    resizeMode="contain"
                    style={{ width: WindowDim.width, height: WindowDim.height }}
                    source={{ uri: LampsURLs[idx] }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Home;
