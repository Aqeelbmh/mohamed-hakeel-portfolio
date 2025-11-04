/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1F6F3A',
                    50: '#E8F5EC',
                    100: '#C8E6D1',
                    200: '#91CFA5',
                    300: '#5AB878',
                    400: '#238F52',
                    500: '#1F6F3A',
                    600: '#1A5F31',
                    700: '#154F28',
                    800: '#103F1F',
                    900: '#0B2F16',
                },
                accent: {
                    DEFAULT: '#F5A623',
                    50: '#FEF7E8',
                    100: '#FDEDC8',
                    200: '#FBDA91',
                    300: '#F9C65A',
                    400: '#F7B323',
                    500: '#F5A623',
                    600: '#D8901D',
                    700: '#BB7A17',
                    800: '#9E6511',
                    900: '#814F0B',
                },
                gray: {
                    50: '#F7F7F9',
                    100: '#EEEFF2',
                    200: '#DDDEE5',
                    300: '#CCCED8',
                    400: '#BBBDCB',
                    500: '#AAADBF',
                    600: '#7D8199',
                    700: '#505573',
                    800: '#23294D',
                    900: '#0A0E27',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}