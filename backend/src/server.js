// Define GraphQL server section
import { GraphQLServer } from "graphql-yoga";
import path from 'path';
import resolvers from './graphql/resolvers'; // Get Mutation's and Query's (Merged at index.js from 'resolvers' path)
// Connection to mongoDB
import './database';

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'), // Define Schema path
    resolvers, // resolvers: resolvers (Contains Mutation and Query from index)
})

