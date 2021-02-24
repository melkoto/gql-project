const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
const schema = require('./schema/schema');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gql.49sfe.mongodb.net/gql-project?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection.once('open', () => console.log('Connected to DB'));

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => console.log('Listening'));
