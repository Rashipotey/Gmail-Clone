/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['"Google Sans"', 'Roboto', 'RobotoDraft', 'Helvetica', 'Arial', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

