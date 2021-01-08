/** Shared config for application; can be req'd many places. */

const dotenv = require('dotenv');

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 3001;

// database is:
//
// - on Heroku or local, get from .env => DATABASE_URL
// - in testing, from .env => TEST_DATABASE_URL

let DB_URI: string;

if (process.env.NODE_ENV === 'test') {
  DB_URI = process.env.TEST_DATABASE_URL;
} else {
  DB_URI = process.env.DATABASE_URL;
}

export { SECRET_KEY, PORT, DB_URI };
