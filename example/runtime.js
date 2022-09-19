const { default: gql } = require("graphql-tag");

const schema = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
`;

console.log(schema);
