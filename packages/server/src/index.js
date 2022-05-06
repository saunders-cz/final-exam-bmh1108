import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await server.listen();

console.log(`Server ready at ${url}`);
