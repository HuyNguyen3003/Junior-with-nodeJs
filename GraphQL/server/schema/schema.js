const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql



var books = [
    { name: 'i love you', genre: 'babe', id: '1', idAuthor: '1' },
    { name: 'i hate you', genre: 'omg', id: '2', idAuthor: '2' },
    { name: 'i like you', genre: 'babe', id: '3', idAuthor: '3' },
    { name: 'i puzi you', genre: 'babe', id: '4', idAuthor: '2' },
    { name: 'i bj you', genre: 'babe', id: '5', idAuthor: '3' },
    { name: 'i fwb you', genre: 'babe', id: '6', idAuthor: '3' },


]
var authors = [
    { name: 'huy', age: 'babe', id: '1' },
    { name: 'nhi', age: 'omg', id: '2' },
    { name: 'trong', age: 'babe', id: '3' }

]






const bookType = new GraphQLObjectType({
    name: 'book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: authorType,
            resolve(parent, args) {

                return _.find(authors, { id: parent.idAuthor })

            }
        }
    })
})

const authorType = new GraphQLObjectType({
    name: 'author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
        books: {
            type: new GraphQLList(bookType),
            resolve(parent, args) {

                return _.filter(books, { idAuthor: parent.id })

            }
        }
    })
})



const rootQuery = new GraphQLObjectType({
    name: 'root',
    fields: () => ({
        book: {
            type: bookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(books, { id: args.id })

            }
        },
        author: {
            type: authorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })

            }
        },

    })
})


module.exports = new GraphQLSchema({
    query: rootQuery
})