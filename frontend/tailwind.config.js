// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4169E1', // Royal Blue
          background: '#FFFFFF', // White
          text: '#333333', // Dark Gray
          secondary: '#F0F0F0', // Light Gray
        },
      },
    },
    plugins: [],
  }
  