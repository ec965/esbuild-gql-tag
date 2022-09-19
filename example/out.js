(() => {
  // schema.gql
  var g = { "kind": "Document", "definitions": [{ "kind": "ObjectTypeDefinition", "name": { "kind": "Name", "value": "Book" }, "interfaces": [], "directives": [], "fields": [{ "kind": "FieldDefinition", "name": { "kind": "Name", "value": "title" }, "arguments": [], "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } }, "directives": [] }, { "kind": "FieldDefinition", "name": { "kind": "Name", "value": "author" }, "arguments": [], "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Author" } }, "directives": [] }] }, { "kind": "ObjectTypeDefinition", "name": { "kind": "Name", "value": "Author" }, "interfaces": [], "directives": [], "fields": [{ "kind": "FieldDefinition", "name": { "kind": "Name", "value": "name" }, "arguments": [], "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } }, "directives": [] }, { "kind": "FieldDefinition", "name": { "kind": "Name", "value": "books" }, "arguments": [], "type": { "kind": "ListType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Book" } } }, "directives": [] }] }], "loc": { "start": 0, "end": 95 } };
  var schema_default = g;

  // index.js
  console.log(schema_default);
})();
