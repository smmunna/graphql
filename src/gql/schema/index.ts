// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql

 type Product {
    id: ID
    name: String
    image: String
    price: Float
    description: String
    quantity: Boolean
    category: String
 }

 type Category {
    id: ID
    name: String
 }
 
  type Query {
    products: [Product]
    product(pid: ID, name:String): Product
    categories: [Category]
    category(id: ID, name: String): Category
  }
`;