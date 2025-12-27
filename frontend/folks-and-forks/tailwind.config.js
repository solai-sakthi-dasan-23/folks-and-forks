export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#1F7A4D",
        brandGreenDark: "#16603D", // 👈 ADD THIS
        brandGreenSoft: "#EAF6F0",
        pageBg: "#F7FAF9",
        textPrimary: "#1F2933",
        textSecondary: "#4B5563",
        borderLight: "#E5E7EB",
      },
    }
  },
  plugins: []
};
