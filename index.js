const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./data/schema');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(8080, () => {
    console.log('Server running on localhost:8080')
})