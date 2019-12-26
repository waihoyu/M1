module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        var1: 'writable',
        var4: 'writable',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'no-unused-vars': 'off',
        'no-console': 'error',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        quotes: ['error', 'single'],
    },
}
