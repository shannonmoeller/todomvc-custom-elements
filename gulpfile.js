// Configure environment.
require('dotenv').config();

// Transpile on the fly.
require('babel-register');

// Load tasks.
require('require-dir')('./tasks');

// Keep process alive on error.
process.on('uncaughtException', console.error);
process.on('unhandledRejection', console.error);
