const { reject } = require('lodash');
const Heroes = require('../db/connect');

const resolvers = {
    Query: {
        getHeroes: async () => {
            return Heroes.find({});
        },
        getComicsByHeroId: (root, { id }) => {
            return new Promise((resolve, object) => {
                Heroes.findById({ _id: id }, (err,hero) => {
                    console.log(hero.comics);
                    if (err) reject(err)
                    else resolve(hero.comics);
                });
            })
        }
    }
}

module.exports = resolvers;