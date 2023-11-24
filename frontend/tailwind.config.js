/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'dark': '#0C0D0E',
            'black': '#171717',
            'white': 'white',
            'light-gray': '#eeeeee',
            'purple': '#5A43FB',
            'border-color': 'rgba(70,70,70,0.55)',
            'light-transparent': 'rgba(255,255,255,0.05)',
            'light-hover-transparent': 'rgba(255,255,255,0.01)',
            'light-board-transparent': 'rgba(255,255,255,0.03)',
            'black-transparent': 'rgba(0,0,0,0.2)',
            'dark-transparent': 'rgba(34,34,34,0.43)',
            'gray': '#c2c2c2',
            'transparent': 'rgba(0,0,0,0)',
            'white-placeholder': 'rgba(255,255,255,0.4)',
            'popup-background-color': 'rgb(35,35,35)',
            'popup-border-color': 'rgba(255,255,255,0.05)',
            'light-border-color': 'rgba(255,255,255,0.2)'
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif']
        },
        extend: {},
    },
    plugins: [],
}