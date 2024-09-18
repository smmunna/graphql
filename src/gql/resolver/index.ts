import { db } from "../../db.js";

export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent:any, args:{pid:Number, name:String}, context:any) => {
            const result = db.products.find(p => p.name == args.name)
            return (result)
        },

        categories: () => db.categories,
        category: (parent:any, args:{cid:Number, name:String}, context:any) => {
            const result = db.categories.find(c => c.name == args.name)
            return (result)
        },
    },
};