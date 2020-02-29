module.exports = {
    preset: "react-native",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    },
    transformIgnorePatterns: [],
};
