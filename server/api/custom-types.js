const { GraphQLScalarType } = require('graphql');

const { Kind } = require('graphql/language');

const DateScalar = new GraphQLScalarType({
  name: 'Date', // Date is the name of the GRAPHQLSCALARTYPE
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // new instance of DATE OBJECT // value sent from the client to the server
  },
  serialize(value) {
    return value.getTime(); // value sent from server to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value) // ast value is always in string format
    }
    return null;
  },
});


module.exports = {
  DateScalar
};
