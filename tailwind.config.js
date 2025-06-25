/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7ce7fc",
                secondary: "#343845",
                tertiary: "#21242c",
            },
            screens: {
                laptop: "1250px",
                laptopSm: "1118px",
                tabletLg: "876px",
                navbarMax: "662px"
            }
        },
    },
    plugins: [],
}

