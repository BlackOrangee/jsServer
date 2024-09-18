import express from 'express';
import postRouter from './routes/postRouter.mjs';
import reviewRouter from './routes/reviewRouter.mjs';

import dbConnection from './db/index.mjs';

dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.on('connected', console.log.bind(console, 'connected!'));

const app = express();

const port = 4000;
app.use(express.json());

app.use('/posts', postRouter);
app.use('/reviews', reviewRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
