import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find(p => p.name == args.name);
            return (result);
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find(c => c.name == args.name);
            return (result);
        },
    },
};
