/** Start server for penny. */
const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}!`);
});
