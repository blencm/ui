module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // CommonJS for Jest
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
};
