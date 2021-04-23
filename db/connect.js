import mongoose from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://aaron-dev-0:NiMWn9CD7wcs82N@upmetrics-assessment-cl.dsky9.mongodb.net/heroDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const heroSchema = new mongoose.Schema({
    name: { type: String},
    comics: { type: Array }
})

const Heros = mongoose.model('heros', heroSchema);

export { Heros }