module.exports = {
    extends: './node_modules/configs-og/.eslintrc.js',
    rules: {
        'import/no-unresolved': [2, { ignore: ['Config'] }]
    }
};
