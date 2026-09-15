import 'dotenv/config';

import app from './app';
import sequelize from './config/connection';
import './models';

const port = Number(process.env.PORT) || 3000;

async function startServer(): Promise<void> {
  try {
    await sequelize.authenticate();

    await sequelize.sync();

    console.log('Database connection established.');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
    process.exit(1);
  }
}

startServer();
