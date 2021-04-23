const { reject } = require('lodash');
const { Heros } = require('../db/connect');

const resolvers = {
    Query: {
        getHeros: () => {
            return Heros.find({});
        },
        getComicsByHeroId: (root, { id }) => {
            return new Promise((resolve, object) => {
                Heros.findById({ _id: id }, (err,hero) => {
                    console.log(hero.comics);
                    if (err) reject(err)
                    else resolve(hero.comics);
                });
            })
        }
    }
}

module.exports = resolvers;