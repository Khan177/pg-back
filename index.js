require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;
const DB_KEY = process.env.DB_KEY;
const constructionRouter = require('./router/constructionRouter');
const partnerRouter = require('./router/partnerRouter');
const cityRouter = require('./router/cityRouter');
const districtRouter = require('./router/districtRouter');
const postalCodeRouter = require('./router/postalCodeRouter');


mongoose.connect(DB_KEY, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(cors());
app.use('/constructions', constructionRouter);
app.use('/partners', partnerRouter);
app.use('/cities', cityRouter);
app.use('/districts', districtRouter);
app.use('/postcodes', postalCodeRouter);
app.listen(PORT);
