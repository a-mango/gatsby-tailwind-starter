module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}
