const { ApolloServer } = require('apollo-server-express'); // connect to server
const { makeExecutableSchema } = require('graphql-tools'); // A set of utilities to build your JavaScript GraphQL schema,  // to write the schema and resolver code

const typeDefs = require('../api/schema');
let resolvers = require('../api/resolvers');
const { AuthDirective } = require('../api/custom-directives');

module.exports = ({ app, pgResource }) => {
  resolvers = resolvers(app);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
      auth: AuthDirective
    }
  });

  const apolloServer = new ApolloServer({
    // create function - using req // context is property of apolloserver
    context: ({ req }) => {
      // request object through express & has metadata from the client to the server // ie bunch of cookies
      const tokenName = app.get('JWT_COOKIE_NAME');
      const token = req ? req.cookies[tokenName] : undefined;

      return {
        req,
        token,
        pgResource // returning in apolo context server
      };
    },
    schema // use schema
  });

  apolloServer.applyMiddleware({
    app,
    cors: app.get('CORS_CONFIG')
  });
};
