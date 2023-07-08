const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql



var books = [
    { name: 'i love you', genre: 'babe', id: '1' },
    { name: 'i hate you', genre: 'omg', id: '2' },
    { name: 'i choose you', genre: 'babe', id: '3' }

]






const bookType = new GraphQLObjectType({
    name: 'book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})



const rootQuery = new GraphQLObjectType({
    name: 'root',
    fields: () => ({
        book: {
            type: bookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(books, { id: args.id })

            }
        },

    })
})


module.exports = new GraphQLSchema({
    query: rootQuery
})