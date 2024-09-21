/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: 
      {
        primary: "#D46A24",            // Main orange color
        primaryLight: "#F7D8B5",       // Light orange
        primaryLightest: "rgb(255, 239, 223)",  // Very light orange
        primaryMedium: "#F1A65F",      // Medium orange
        primaryLight2: "rgb(255, 220, 182)",   // Lighter orange
        primaryDark: "rgb(201 71 5)",        // Darker orange
        yellowLight:"#feffdd"
      }
      
    },
  },
  plugins: [require("preline/plugin")],
};
