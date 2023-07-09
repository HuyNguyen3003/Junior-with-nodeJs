const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql
const Book = require('../models/book')
const Author = require('../models/author')



// var books = [
//     { name: 'i love you', genre: 'babe', id: '1', idAuthor: '1' },
//     { name: 'i hate you', genre: 'omg', id: '2', idAuthor: '2' },
//     { name: 'i like you', genre: 'babe', id: '3', idAuthor: '3' },
//     { name: 'i puzi you', genre: 'babe', id: '4', idAuthor: '2' },
//     { name: 'i bj you', genre: 'babe', id: '5', idAuthor: '3' },
//     { name: 'i fwb you', genre: 'babe', id: '6', idAuthor: '3' },


// ]
// var authors = [
//     { name: 'huy', age: 'babe', id: '1' },
//     { name: 'nhi', age: 'omg', id: '2' },
//     { name: 'trong', age: 'babe', id: '3' }

// ]






const bookType = new GraphQLObjectType({
    name: 'book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: authorType,
            resolve(parent, args) {
                return Author.findById(parent.idAuthor)


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
                return Book.find({ idAuthor: parent.id })

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
                return Book.findById(parent.id)

            }
        },
        author: {
            type: authorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Author.findById(parent.id)

            }
        },
        books: {
            type: new GraphQLList(bookType),
            resolve(parent, args) {
                return Book.find({})

            }
        },
        authors: {
            type: new GraphQLList(authorType),
            resolve(parent, args) {
                return Author.find({})


            }
        },

    })
})

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addAuthor: {
            type: authorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLString }
            },
            resolve(parent, args) {
                Author.create({
                    name: args.name,
                    age: args.age
                })
            }
        },
        addBook: {
            type: bookType,
            args: {
                name: { type: GraphQLString },
                genre: { type: GraphQLString },
                idAuthor: { type: GraphQLString }
            },
            resolve(parent, args) {
                Book.create({
                    name: args.name,
                    genre: args.genre,
                    idAuthor: args.idAuthor
                })
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
})