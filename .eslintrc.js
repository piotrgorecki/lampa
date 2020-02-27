module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "@react-native-community",
        "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint",  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended",  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["sort-imports-es6-autofix"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-hooks/exhaustive-deps": "off",
        "sort-imports-es6-autofix/sort-imports-es6": [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
            },
        ],
    },
};