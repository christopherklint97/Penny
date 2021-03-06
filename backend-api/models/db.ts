import { Sequelize } from 'sequelize';
import { DB_URI } from '../config';

// Option 1: Passing a connection URI
const sequelize = new Sequelize(DB_URI, { logging: false }); // Example for postgres

export default sequelize;
