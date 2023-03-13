const { compilerOptions } = require('./tsconfig'); // eslint-disable-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment

const { pathsToModuleNameMapper } = require('ts-jest/utils'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
    verbose: true,
    rootDir: '.',
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/node_modules/'],
    reporters: ['default', 'jest-summarizing-reporter'],
    setupFilesAfterEnv: ['jest-allure/dist/setup', './jest-setup.ts', 'jest-date-mock'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)$': '<rootDir>/fileMock.ts',
        '\\.svg$': '<rootDir>/../svgMock.js',
        '\\.svg\\?url$': '<rootDir>/../fileMock.js',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    },
    globals: {
        __NODEJS__: false,
        'ts-jest': {
            diagnostics: {
                pathRegex: '__specs__',
            },
        },
    },
};
