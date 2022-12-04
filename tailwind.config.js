module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amethyst_bg_light: '#cf9df2',
        yellow_bg_light: '#ffff99',
        gray_bg_dark: '#717977',
        cian_bg_dark:'#568adf',
        r_b_color: '#6A679E',
        transparent_screen: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        Silkscreen: ['Silkscreen', 'cursive'],
      },
      textColor: {
        light_text: '#432dc2',
      },
      placeholderColor: {
        primary: '#432dc2'
      },
      borderColor: {
        transparent_border: 'rgba(255, 255, 255, 0.14)',
        input_border: 'rgba(77, 40, 40, 0.158)',
      },
      boxShadow: {
        r_b_shadow: '1px 1px 1px 1px rgba(77, 40, 40, 0.212)',
        enter_button: '-1px 1px 1px 1px rgba(77, 40, 40, 0.514)',
        create_button: '1px 1px 1px 1px rgba(77, 40, 40, 0.514)',
      },
      margin: {
        '480': '480px',
      },
    },
  },
  plugins: [],
}
