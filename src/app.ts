import express from 'express';

import routes from './routes/index.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(routes);

export default app;
