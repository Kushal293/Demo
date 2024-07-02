/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        instagram:
          'linear-gradient(90deg, #F3A31A 0%, #DC4F53 46%, #A92C9F 100%)',
      },
      colors: {
        'primary-600': '#17545E',
        'primary-600-65%': '#17545EA6',
        'primary-100': '#17545E91',
        'secondary-600': '#F3A31A',
        'secondary-100': '#F7F5E5',
        'secondary-50': '#E1DDD059',
        'black-100': '#322100',
        tritary: '#F7F5E5',
        CTA: '#BABABA',
      },
      fontSize: {
        'main-title': '52px',
        '46px': '46px',
        '32px': '32px',
        '28px': '28px',
        '26px': '26px',
        '15px': '15px',
        '10px': '10px',
      },
      lineHeight: {
        'main-title': '63px',
      },
      margin: {
        25: '105px',
      },
      boxShadow: {
        custom: '0px 4px 5px 0px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
