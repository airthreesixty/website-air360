/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1, // Enables modern CSS features, including nesting
      features: {
        'nesting-rules': true // Enables CSS nesting support
      }
    }
  }
};

export default config;
