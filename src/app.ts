import 'reflect-metadata'; // We need this in order to use @Decorators

import config from './config';
import loaders from './loaders';

import express from 'express';

import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
