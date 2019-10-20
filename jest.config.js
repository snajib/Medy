const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  verbose: true,
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
