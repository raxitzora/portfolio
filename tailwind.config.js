/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom boxShadow values to simulate neon light effects
      boxShadow: {
        // Neon blue shadow effect
        'neon-blue': '0 0 20px rgba(0, 191, 255, 0.5), 0 0 40px rgba(0, 191, 255, 0.3), 0 0 60px rgba(0, 191, 255, 0.2)',
        // Neon green shadow effect
        'neon-green': '0 0 20px rgba(50, 205, 50, 0.5), 0 0 40px rgba(50, 205, 50, 0.3), 0 0 60px rgba(50, 205, 50, 0.2)',
        // Neon gray shadow effect
        'neon-gray': '0 0 20px rgba(169, 169, 169, 0.5), 0 0 40px rgba(169, 169, 169, 0.3), 0 0 60px rgba(169, 169, 169, 0.2)',
        // Neon yellow shadow effect
        'neon-yellow': '0 0 20px rgba(255, 255, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
