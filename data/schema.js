import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Hero {
        id: ID
        name: String
        comics: [Comic]
    }

    type Comic {
        available: Int
        items: [Item]
    }

    type Item {
        name: String
    }

    type Query {
        getHeros: [Hero]
        getComicsByHeroId(id: ID): [Comic]
    }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };