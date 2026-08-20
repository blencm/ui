module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // CJS para Jest
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
};