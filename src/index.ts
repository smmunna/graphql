import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db.js';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

 type Product {
    id: ID
    name: String
    image: String
    price: Float
    description: String
    quantity: Boolean
    category: String
 }
 
  type Query {
    products: [Product]
    product(pid: ID, name:String): Product
  }
`;


const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent:any, args:{pid:Number, name:String}, context:any) => {
            const result = db.products.find(p => p.name == args.name)
            return (result)
        }
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);