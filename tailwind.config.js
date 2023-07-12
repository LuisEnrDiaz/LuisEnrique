/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                colorPrimary: {
                    50: "#E5EAEB",
                    100: "#CBD5D7",
                    200: "#9AAEB1",
                    300: "#688387",
                    400: "#435456",
                    500: "#1B2223",
                    600: "#161C1D",
                    700: "#101414",
                    800: "#0B0E0E",
                    900: "#040606",
                    950: "#020303",
                },
                colorSecondary: {
                    50: "#EAF0F0",
                    100: "#D3DEDF",
                    200: "#A9C0C1",
                    300: "#7D9FA1",
                    400: "#5A7A7C",
                    500: "#3A4F50",
                    600: "#2F4041",
                    700: "#222F2F",
                    800: "#182021",
                    900: "#0B0F0F",
                    950: "#060909",
                },
                colorBgP: {
                    50: "#E6FEFA",
                    100: "#CEFDF4",
                    200: "#9DFBEA",
                    300: "#70FAE1",
                    400: "#3FF8D6",
                    500: "#0EF6CC",
                    600: "#08CAA6",
                    700: "#06987E",
                    800: "#046251",
                    900: "#023128",
                    950: "#011914",
                },
                colorBgS: {
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FAFFFE",
                    300: "#FAFFFE",
                    400: "#F6FEFD",
                    500: "#F4FEFD",
                    600: "#98F6EC",
                    700: "#3FEEDC",
                    800: "#11B6A6",
                    900: "#095D55",
                    950: "#042F2A",
                },
            },

            boxShadow: {
                body: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                card: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                rgb: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
            },

            keyframes: {
                jello: {
                    "from, 11.1%, to": {
                        transform: "translate3d(0,0,0)",
                    },
                    "22.2%": {
                        transform: "skewX(-12.5deg) skewY(-12.5deg)",
                    },
                    "33.3%": {
                        transform: "skewX(6.25deg) skewY(6.25deg)",
                    },
                    "44.4%": {
                        transform: "skewX(-3.125deg) skewY(-3.125deg)",
                    },
                    "55.5%": {
                        transform: "skewX(1.5625deg) skewY(1.5625deg)",
                    },
                    66.6: {
                        transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
                    },
                    "77.7%": {
                        transform: "skewX(0.390625deg) skewY(0.390625deg)",
                    },
                    "88.8%": {
                        transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
                    },
                },

                flicker: {
                    "0%": {
                        filter: " blur(5px) brightness(1)",
                    },
                    "3%": {
                        filter: "blur(5px) brightness(0)",
                    },
                    "6%": {
                        filter: "blur(5px) brightness(0)",
                    },
                    "7%": {
                        filter: "blur(5px) brightness(1)",
                    },
                    "8%": {
                        filter: "blur(5px) brightness(0)",
                    },
                    "9%": {
                        filter: "blur(5px) brightness(1)",
                    },
                    "10%": {
                        filter: "blur(5px) brightness(0)",
                    },
                    "20%": {
                        filter: "blur(5px) brightness(1)",
                    },
                    "50%": {
                        filter: "blur(5px) brightness(1)",
                    },
                    "70%": {
                        filter: "blur(5px) brightness(1)",
                    },
                    "100%": {
                        filter: "blur(5px) brightness(1)",
                    },
                },

                textAnimation: {
                    "0%": {
                        "margin-top": "0",
                    },
                    "10%": {
                        "margin-top": "0",
                    },
                    "20%": {
                        "margin-top": "-5.62rem",
                    },
                    "30%": {
                        "margin-top": "-5.62rem",
                    },
                    "40%": {
                        "margin-top": "-11.24rem",
                    },
                    "60%": {
                        "margin-top": "-11.24rem",
                    },
                    "70%": {
                        "margin-top": "-5.62rem",
                    },
                    "80%": {
                        "margin-top": "-5.62rem",
                    },
                    "90%": {
                        "margin-top": "0",
                    },
                    "100%": {
                        "margin-top": "0",
                    },
                },
            },

            animation: {
                jello: "jello 2s infinite",
                flicker: "flicker 2s linear forwards",
                textAnimation: "textAnimation 8s infinite",
                menu: "all .5s ease",
            },
        },
    },
    plugins: [require("tailwindcss-animated")],
};
