module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'jini-yellow-100': 'rgb(255, 211, 77)'
            },
            backgroundImage: {
                'hero': "url('/bgimage.png')",
                'footer-texture': "url('/img/footer-texture.png')"
            },
            backgroundColor: {
                'hero-mask': 'rgba(0, 0, 0, 0.466)'
            },
            fontSize: {
                'base-xs': '0.6rem',
                'base-small': '0.65rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};

//font-mono text-sm font-bold text-yellow-300 bg-black bg-opacity-50 border-2 border-yellow-300 rounded-full
