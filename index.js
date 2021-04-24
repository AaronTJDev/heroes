const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./data/schema');

const app = express();
const port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})