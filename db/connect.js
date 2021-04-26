const mongoose = require('mongoose');

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const heroSchema = new mongoose.Schema({
    name: { type: String},
    comics: { type: Array }
})

const Heroes = mongoose.model('heroes', heroSchema);

module.exports = Heroes;