import { ApolloServer } from "@apollo/server" //Create server
import { startStandaloneServer } from "@apollo/server/standalone" //Statr the server
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
})
 
const { url } = await startStandaloneServer(server)
 
console.log(`🚀 Server ready at ${url}`)