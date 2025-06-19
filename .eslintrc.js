module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all", "plugin:@typescript-eslint/recommended"],
    plugins: ["react", "react-native", "@typescript-eslint"],
    env: {
        "react-native/react-native": true,
        es6: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
        // Пример: запрещаем текст вне <Text> для React Native
        "react-native/no-raw-text": [2, { skip: ["Trans"] }],
        // Ваши дополнительные правила
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
