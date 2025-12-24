/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-pink': '#FF2C7C',
                'brand-blue': '#030689',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                alexandria: ['Alexandria', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
}
