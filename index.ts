require('@babel/register')({
    presets: ['@babel/preset-env']
});

const dotenv = require('dotenv')

/** Load environment variables up first */
dotenv.config();

module.exports = require('./build/server')