require('dotenv').config();
const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./data/schema');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})