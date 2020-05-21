module.exports = {
  babel: {
    loaderOptions: {
      plugins: [
        [
          'styled-components-px2rem',
          {
            rootValue: 16,
            unitPrecision: 5,
            minPixelValue: 0,
            multiplier: 1,
            transformRuntime: true,
          },
        ],
      ],
    },
  },
};
