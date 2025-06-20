/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                "primary-500": "#D6ED17",
                "gray-100": "#F5F5F5",
                "gray-300": "#B8B8B8",
                "gray-900": "#1D1D1D",
                "info-500": "#3B82F6",
            },
        },
    },
    plugins: [],
};
