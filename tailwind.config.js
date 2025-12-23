/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['RH-Zak', 'sans-serif'],
            },
            colors: {
                'brand-pink': '#FF2C7C',
                'brand-blue': '#0600C6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
}
