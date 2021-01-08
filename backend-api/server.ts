/** Start server for penny. */
import app from './app';
import { PORT } from './config';

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
